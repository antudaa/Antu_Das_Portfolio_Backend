import { Model, Types } from "mongoose";

export interface TUser {
  _id?: string;
  name: string;
  email: string;
  password: string;
  passwordChangedAt?: Date;
  role: "admin";
  status: "active" | "blocked";
  isDeleted: boolean;
}

export type TLoginUser = {
  email: string;
  password: string;
};

export type TPasswordChange = {
  oldPassword: string;
  newPassword: string;
};

export interface UserModel extends Model<TUser> {
  hashPassword(password: string): Promise<string>;

  blockUserByID(id: Types.ObjectId): Promise<Types.ObjectId>;

  deleteUserByID(id: Types.ObjectId): Promise<Types.ObjectId>;

  isUserBlocked(id: Types.ObjectId): Promise<Types.ObjectId>;

  isUserExistsByID(id: string): Promise<string>;

  isUserExistsByEmail(email: string): Promise<TUser>;

  isUserDeleted(id: Types.ObjectId): Promise<Types.ObjectId>;

  isJWTIssuedBeforePasswordChanged(
    passwordChangeTimeStamp: Date,
    jwtIssuedTimeStamp: number,
  ): Promise<boolean>;

  isPasswordMatched(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
}
