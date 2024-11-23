import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { ProjectService } from "./project.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { Types } from "mongoose";

const createProject: RequestHandler = catchAsync(async (req, res) => {
  const result = await ProjectService.createProject(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project created successfully.",
    data: result,
  });
});

const updateProject: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectService.updateProject(
    new Types.ObjectId(id),
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project updated successfully.",
    data: result,
  });
});

const deleteProject: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectService.deleteProject(new Types.ObjectId(id));

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project deleted successfully.",
    data: result,
  });
});

const findProjectById: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProjectService.findProjectById(new Types.ObjectId(id));

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project fetched successfully.",
    data: result,
  });
});

const getAllProjects: RequestHandler = catchAsync(async (req, res) => {
  const result = await ProjectService.getAllProjects();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All projects fetched successfully.",
    data: result,
  });
});

export const ProjectController = {
  createProject,
  updateProject,
  deleteProject,
  findProjectById,
  getAllProjects,
};
