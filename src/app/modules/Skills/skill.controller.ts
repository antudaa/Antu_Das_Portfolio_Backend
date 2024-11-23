import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { SkillService } from "./skill.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { Types } from "mongoose";

const createSkill: RequestHandler = catchAsync(async (req, res) => {
  const result = await SkillService.createSkill(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill added successfully.",
    data: result,
  });
});

const updateSkill: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillService.updateSkill(
    new Types.ObjectId(id),
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill updated successfully.",
    data: result,
  });
});

const deleteSkill: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillService.deleteSkill(new Types.ObjectId(id));

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill deleted successfully.",
    data: result,
  });
});

const findSkillById: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await SkillService.findSkillById(new Types.ObjectId(id));

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill fetched successfully.",
    data: result,
  });
});

const getAllSkills: RequestHandler = catchAsync(async (req, res) => {
  const result = await SkillService.getAllSkills();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All skills fetched successfully.",
    data: result,
  });
});

export const SkillController = {
  createSkill,
  updateSkill,
  deleteSkill,
  findSkillById,
  getAllSkills,
};
