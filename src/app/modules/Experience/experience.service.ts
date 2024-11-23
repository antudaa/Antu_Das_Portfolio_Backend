import { Types } from "mongoose";
import { Experience } from "./experience.model";
import { TExperience } from "./experience.interface";

const createExperience = async (payload: TExperience) => {
  const result = await Experience.create(payload);
  return result;
};

const updateExperience = async (
  id: Types.ObjectId,
  payload: Partial<TExperience>,
) => {
  const result = await Experience.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteExperience = async (id: Types.ObjectId) => {
  const result = await Experience.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

const findExperienceById = async (id: Types.ObjectId) => {
  const result = await Experience.findById(id);
  return result;
};

const findAllExperience = async () => {
  const result = await Experience.find();
  return result;
};

export const ExperienceService = {
  createExperience,
  updateExperience,
  deleteExperience,
  findExperienceById,
  findAllExperience,
};
