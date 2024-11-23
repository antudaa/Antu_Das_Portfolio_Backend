import config from "../../config";
import { TLoginUser, TPasswordChange, TUser } from "./auth.interface";
import jwt, { JwtPayload } from "jsonwebtoken";
import { Admin } from "./auth.model";
import AppError from "../../Errors/AppError";
import httpStatus from "http-status";
import { createToken } from "./auth.utils";

const RegistrationIntoDB = async (payload: TUser) => {
  const result = await Admin.create(payload);
  return result;
};

const loginUser = async (payload: TLoginUser) => {
  const user = await Admin.isUserExistsByEmail(payload?.email);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found!");
  }

  console.log(user);

  if (!(await Admin.isUserExistsByEmail(payload?.email))) {
    throw new AppError(httpStatus.FORBIDDEN, "User is deleted!");
  }

  if (!(await Admin.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, "Password do not matched!");
  }

  const jwtPayload = {
    userEmail: user.email,
    role: user.role,
    userId: user._id as string,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret_token as string,
    config.jwt_access_expire_time as string,
  );

  const refreshToken = createToken(
    jwtPayload,
    config.jwt_access_refrest_secret_token as string,
    config.jwt_refrest_expires_time as string,
  );

  return {
    accessToken,
    refreshToken,
    user,
  };
};

const changePassword = async (
  userInfo: JwtPayload,
  payload: TPasswordChange,
) => {
  const { oldPassword, newPassword } = payload;

  const user = await Admin.isUserExistsByEmail(userInfo.userEmail);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not exists!");
  }

  const isDeleted = user?.isDeleted;

  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, "This user is deleted!");
  }

  const status = user?.status;

  if (status === "blocked") {
    throw new AppError(httpStatus.FORBIDDEN, "User is blocked!");
  }

  if (!(await Admin.isPasswordMatched(oldPassword, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, "Password do not matched!");
  }

  const hashedPassword = await Admin.hashPassword(newPassword);

  const result = await Admin.findOneAndUpdate(
    {
      _id: userInfo.userId,
      role: userInfo.role,
    },
    {
      password: hashedPassword,
      passwordChangedAt: new Date(),
    },
  );

  return null;
};

const refreshToken = async (token: string) => {
  // checking if the given token is valid
  const decoded = jwt.verify(
    token,
    config.jwt_access_refrest_secret_token as string,
  ) as JwtPayload;

  const { userEmail, iat } = decoded;

  // checking if the user is exist
  const user = await Admin.isUserExistsByEmail(userEmail);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
  }

  const isDeleted = user?.isDeleted;

  if (isDeleted) {
    throw new AppError(httpStatus.FORBIDDEN, "This user is deleted !");
  }

  const userStatus = user?.status;

  if (userStatus === "blocked") {
    throw new AppError(httpStatus.FORBIDDEN, "This user is blocked ! !");
  }

  if (
    user.passwordChangedAt &&
    (await Admin.isJWTIssuedBeforePasswordChanged(
      user.passwordChangedAt,
      iat as number,
    ))
  ) {
    throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized !");
  }

  const jwtPayload = {
    userEmail: user.email,
    role: user.role,
    userId: user._id as string,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret_token as string,
    config.jwt_access_expire_time as string,
  );

  return {
    accessToken,
  };
};

// const Login = async()

export const AuthServices = {
  RegistrationIntoDB,
  loginUser,
  changePassword,
  refreshToken,
};
