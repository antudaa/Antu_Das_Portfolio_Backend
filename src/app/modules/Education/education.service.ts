import { Types } from "mongoose";
import { Education } from "./education.model";
import { TEducation } from "./education.interface";

const createEducation = async (payload: TEducation) => {
  const result = await Education.create(payload);
  return result;
};

const updateEducation = async (
  id: Types.ObjectId,
  payload: Partial<TEducation>,
) => {
  const result = await Education.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteEducation = async (id: Types.ObjectId) => {
  const result = await Education.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

const findEducationById = async (id: Types.ObjectId) => {
  const result = await Education.findById(id);
  return result;
};

const findAllEducation = async () => {
  const result = await Education.find();
  return result;
};

export const EducationService = {
  createEducation,
  updateEducation,
  deleteEducation,
  findEducationById,
  findAllEducation,
};
