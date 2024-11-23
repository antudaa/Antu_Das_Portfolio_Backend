import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { AchievementServices } from "./achievement.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { Types } from "mongoose";

const createAchievement: RequestHandler = catchAsync(async (req, res) => {
  const result = await AchievementServices.createAchievement(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Achievement Info added successfully.",
    data: result,
  });
});

const updateAchievement: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AchievementServices.updateAchievement(
    new Types.ObjectId(id),
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Achievement Info updated successfully.",
    data: result,
  });
});

const deleteAchievement: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AchievementServices.deleteAchievement(
    new Types.ObjectId(id),
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Achievement Info deleted successfully.",
    data: result,
  });
});

const findAchievementById: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await AchievementServices.findAchievementById(
    new Types.ObjectId(id),
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Achievement Info fetched successfully.",
    data: result,
  });
});

const getAllAchievementData: RequestHandler = catchAsync(async (req, res) => {
  const result = await AchievementServices.findAllAchievements();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Achievement Info fetched successfully.",
    data: result,
  });
});

export const AchievementController = {
  createAchievement,
  updateAchievement,
  deleteAchievement,
  findAchievementById,
  getAllAchievementData,
};
