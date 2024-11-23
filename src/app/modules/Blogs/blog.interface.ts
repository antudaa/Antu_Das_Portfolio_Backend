import { Model } from "mongoose";

export type TBlog = {
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  tags?: string[];
  isPublished: boolean;
  imageUrl?: string;
  referenceLinks?: string[];
};

export interface BlogModel extends Model<TBlog> {}
