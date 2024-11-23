import { Types } from "mongoose";
import { TPersonalInfo } from "./personal.interface";
import { PersonalInfo } from "./personal.model";

const createPersonalInfo = async (payload: TPersonalInfo) => {
  const result = await PersonalInfo.create(payload);
  return result;
};

const updatePersonalInfo = async (
  id: Types.ObjectId,
  payload: Partial<TPersonalInfo>,
) => {
  const result = await PersonalInfo.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return result;
};

const getPersonalInfo = async () => {
  const result = await PersonalInfo.find();
  return result;
};

const getPersonalInfoById = async (email: string) => {
  const result = await PersonalInfo.findOne({ email });
  return result;
};

export const PersonalInfoService = {
  createPersonalInfo,
  updatePersonalInfo,
  getPersonalInfo,
  getPersonalInfoById,
};