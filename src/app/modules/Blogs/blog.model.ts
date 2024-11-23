import { Schema, model } from "mongoose";
import { BlogModel, TBlog } from "./blog.interface";

const BlogSchema = new Schema<TBlog>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, required: true },
  updatedAt: { type: Date, required: true },
  tags: { type: [String], default: [] },
  isPublished: { type: Boolean, required: true },
  imageUrl: { type: String, required: false },
  referenceLinks: { type: [String], default: [] },
});

export const Blog = model<TBlog, BlogModel>("Blog", BlogSchema);
