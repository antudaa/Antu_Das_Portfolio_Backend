import { Types } from "mongoose";
import { Achievement } from "./achievement.model";
import AppError from "../../Errors/AppError";
import httpStatus from "http-status";
import { TAchievement } from "./achievement.interface";

const createAchievement = async (payload: TAchievement) => {
  const result = await Achievement.create(payload);
  return result;
};

const updateAchievement = async (
  id: Types.ObjectId,
  payload: Partial<TAchievement>,
) => {
  const result = await Achievement.findByIdAndUpdate(id, payload, {
    new: true,
  });
  if (!result)
    throw new AppError(httpStatus.NOT_FOUND, "Achievement not found");
  return result;
};

const deleteAchievement = async (id: Types.ObjectId) => {
  const result = await Achievement.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  if (!result)
    throw new AppError(httpStatus.NOT_FOUND, "Achievement not found");
  return result;
};

const findAchievementById = async (id: Types.ObjectId) => {
  const result = await Achievement.findById(id);
  if (!result)
    throw new AppError(httpStatus.NOT_FOUND, "Achievement not found");
  return result;
};

const findAllAchievements = async () => {
  const results = await Achievement.find();
  return results;
};

export const AchievementServices = {
  createAchievement,
  updateAchievement,
  deleteAchievement,
  findAchievementById,
  findAllAchievements,
};
