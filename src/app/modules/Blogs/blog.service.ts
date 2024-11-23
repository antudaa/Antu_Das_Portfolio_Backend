import { Types } from "mongoose";
import { Blog } from "./blog.model";
import AppError from "../../Errors/AppError";
import httpStatus from "http-status";
import { TBlog } from "./blog.interface";

const createBlog = async (payload: TBlog) => {
  const result = await Blog.create(payload);
  return result;
};

const updateBlog = async (id: Types.ObjectId, payload: Partial<TBlog>) => {
  const result = await Blog.findByIdAndUpdate(id, payload, { new: true });
  if (!result) throw new AppError(httpStatus.NOT_FOUND, "Blog not found");
  return result;
};

const deleteBlog = async (id: Types.ObjectId) => {
  const result = await Blog.findByIdAndUpdate(
    id,
    { isPublished: false },
    { new: true },
  );
  if (!result) throw new AppError(httpStatus.NOT_FOUND, "Blog not found");
  return result;
};

const findBlogById = async (id: Types.ObjectId) => {
  const result = await Blog.findById(id);
  if (!result) throw new AppError(httpStatus.NOT_FOUND, "Blog not found");
  return result;
};

const findAllBlogs = async () => {
  const results = await Blog.find();
  return results;
};

export const BlogServices = {
  createBlog,
  updateBlog,
  deleteBlog,
  findBlogById,
  findAllBlogs,
};
