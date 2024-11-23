import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { EducationService } from "./education.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { Types } from "mongoose";

const createEducation: RequestHandler = catchAsync(async (req, res) => {
  const result = await EducationService.createEducation(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Education created successfully.",
    data: result,
  });
});

const updateEducation: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EducationService.updateEducation(
    new Types.ObjectId(id),
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Education updated successfully.",
    data: result,
  });
});

const deleteEducation: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EducationService.deleteEducation(new Types.ObjectId(id));

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Education deleted successfully.",
    data: result,
  });
});

const findEducationById: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await EducationService.findEducationById(
    new Types.ObjectId(id),
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Education fetched successfully.",
    data: result,
  });
});

const findAllEducation: RequestHandler = catchAsync(async (req, res) => {
  const result = await EducationService.findAllEducation();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All education records fetched successfully.",
    data: result,
  });
});

export const EducationController = {
  createEducation,
  updateEducation,
  deleteEducation,
  findEducationById,
  findAllEducation,
};
