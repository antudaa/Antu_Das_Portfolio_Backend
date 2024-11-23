import { Model } from "mongoose";

export type Contributor = {
  name: string;
  designation: string;
  companyName?: string;
  socialLinks?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
    portfolio?: string;
  };
  profileImageUrl?: string;
};

export type TProject = {
  name: string;
  description: string;
  startDate: Date;
  endDate?: Date;
  technologies?: string[];
  repositoryUrl?: string;
  liveDemoUrl?: string;
  images?: string[];
  videoDemoUrl?: string;
  achievements?: string[];
  contributors?: Contributor[];
  projectNumber: number;
  isDeleted?: boolean;
};

export interface ProjectModel extends Model<TProject> {}
