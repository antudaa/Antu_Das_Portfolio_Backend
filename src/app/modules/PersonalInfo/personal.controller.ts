import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { Types } from "mongoose";
import { PersonalInfoService } from "./personal.service";

const createPersonalInfo: RequestHandler = catchAsync(async (req, res) => {
  const result = await PersonalInfoService.createPersonalInfo(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Personal info created successfully.",
    data: result,
  });
});

const updatePersonalInfo: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await PersonalInfoService.updatePersonalInfo(
    new Types.ObjectId(id),
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Personal info updated successfully.",
    data: result,
  });
});

const getPersonalInfo: RequestHandler = catchAsync(async (req, res) => {
  const result = await PersonalInfoService.getPersonalInfo();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Personal info records fetched successfully.",
    data: result,
  });
});

const getPersonalInfoById: RequestHandler = catchAsync(async (req, res) => {
  console.log(req.params)
  const { email } = req.params;
  const result = await PersonalInfoService.getPersonalInfoById((email));

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Personal info records fetched successfully.",
    data: result,
  });
});

export const PersonalInfoController = {
  createPersonalInfo,
  updatePersonalInfo,
  getPersonalInfo,
  getPersonalInfoById,
};
