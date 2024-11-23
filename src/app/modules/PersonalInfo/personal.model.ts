import { Schema, model } from "mongoose";
import { PersonalInfoModel, TPersonalInfo } from "./personal.interface";

const PersonalInfoSchema = new Schema<TPersonalInfo>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  designation: { type: String, required: true },
  phone: { type: String, required: false },
  address: { type: String, required: false },
  linkedin: { type: String, required: false },
  github: { type: String, required: false },
  facebook: { type: String, required: false },
  bio: { type: String, required: false },
  description: { type: String, required: false },
  profilePictureUrl: { type: String, required: false },
  coverPhotoUrl: { type: String, required: false },
});

export const PersonalInfo = model<TPersonalInfo, PersonalInfoModel>(
  "PersonalInfo",
  PersonalInfoSchema,
);
