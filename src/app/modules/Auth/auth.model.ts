import { Schema, model } from "mongoose";
import { TUser, UserModel } from "./auth.interface";
import bcrypt from "bcrypt";
import config from "../../config";

const adminSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    passwordChangedAt: {
      type: Date,
      default: new Date(),
    },
    role: {
      type: String,
      enum: ["admin"],
      default: "admin",
    },
    status: {
      type: String,
      enum: ["active", "blocked"],
      default: "active",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
  },
);

adminSchema.pre("save", async function (next) {
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

adminSchema.set("toJSON", {
  transform: (doc, ret) => {
    delete ret.password;
    return ret;
  },
});

adminSchema.statics.hashPassword = async function (password: string) {
  const hashedPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_salt_rounds),
  );

  return hashedPassword;
};

adminSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await Admin.findOne({ email });
};

adminSchema.statics.isUserExistsByID = async function (id: string) {
  return await Admin.findById(id);
};

adminSchema.statics.blockUserByID = async function (id: Schema.Types.ObjectId) {
  return await Admin.findByIdAndUpdate(
    id,
    { status: "blocked" },
    { new: true },
  );
};

adminSchema.statics.isUserBlocked = async function (id: Schema.Types.ObjectId) {
  const user = await this.findById(id);
  return user && user.status === "blocked";
};

adminSchema.statics.deleteUserByID = async function (
  id: Schema.Types.ObjectId,
) {
  return await Admin.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};

adminSchema.statics.isUserDeleted = async function (id: Schema.Types.ObjectId) {
  const user = await this.findById(id);
  return user && user.isDeleted === true;
};

adminSchema.statics.isJWTIssuedBeforePasswordChanged = async function (
  passwordChangeTimeStamp: Date,
  jwtIssuedTimeStamp: number,
) {
  const passwordChangeTime = new Date(passwordChangeTimeStamp).getTime() / 1000;

  return passwordChangeTime > jwtIssuedTimeStamp;
};

adminSchema.statics.isPasswordMatched = async function (
  plainPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainPassword, hashedPassword);
};

export const Admin = model<TUser, UserModel>("Admin", adminSchema);
