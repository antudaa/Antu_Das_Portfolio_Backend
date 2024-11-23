import { Model } from "mongoose";

export type TPersonalInfo = {
  id: string;
  name: string;
  email: string;
  designation: string;
  phone?: string;
  address?: string;
  linkedin?: string;
  github?: string;
  facebook?: string;
  bio?: string;
  description?: string;
  profilePictureUrl?: string;
  coverPhotoUrl?: string;
};

export interface PersonalInfoModel extends Model<TPersonalInfo> {}
