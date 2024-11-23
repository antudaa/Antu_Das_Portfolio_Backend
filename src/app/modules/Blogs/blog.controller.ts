import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import { BlogServices } from "./blog.service";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { Types } from "mongoose";

const createBlog: RequestHandler = catchAsync(async (req, res) => {
  const result = await BlogServices.createBlog(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog added successfully.",
    data: result,
  });
});

const updateBlog: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.updateBlog(
    new Types.ObjectId(id),
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog updated successfully.",
    data: result,
  });
});

const deleteBlog: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.deleteBlog(new Types.ObjectId(id));

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog deleted successfully.",
    data: result,
  });
});

const findBlogById: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await BlogServices.findBlogById(new Types.ObjectId(id));

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog fetched successfully.",
    data: result,
  });
});

const getAllBlogs: RequestHandler = catchAsync(async (req, res) => {
  const result = await BlogServices.findAllBlogs();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blogs fetched successfully.",
    data: result,
  });
});

export const BlogController = {
  createBlog,
  updateBlog,
  deleteBlog,
  findBlogById,
  getAllBlogs,
};
