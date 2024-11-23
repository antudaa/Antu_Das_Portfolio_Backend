import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { ExperienceService } from "./experience.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { Types } from "mongoose";

const createExperience: RequestHandler = catchAsync(async (req, res) => {
  const result = await ExperienceService.createExperience(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experience created successfully.",
    data: result,
  });
});

const updateExperience: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ExperienceService.updateExperience(
    new Types.ObjectId(id),
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experience updated successfully.",
    data: result,
  });
});

const deleteExperience: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ExperienceService.deleteExperience(
    new Types.ObjectId(id),
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experience deleted successfully.",
    data: result,
  });
});

const findExperienceById: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ExperienceService.findExperienceById(
    new Types.ObjectId(id),
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Experience fetched successfully.",
    data: result,
  });
});

const findAllExperience: RequestHandler = catchAsync(async (req, res) => {
  const result = await ExperienceService.findAllExperience();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All experience records fetched successfully.",
    data: result,
  });
});

export const ExperienceController = {
  createExperience,
  updateExperience,
  deleteExperience,
  findExperienceById,
  findAllExperience,
};
