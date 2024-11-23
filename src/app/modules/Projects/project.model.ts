import { Schema, model } from "mongoose";
import { ProjectModel, TProject } from "./project.interface";

const ContributorSchema = new Schema({
  name: { type: String, required: true },
  designation: { type: String, required: true },
  companyName: { type: String, required: false },
  socialLinks: {
    linkedin: { type: String, required: false },
    github: { type: String, required: false },
    twitter: { type: String, required: false },
    portfolio: { type: String, required: false },
  },
  profileImageUrl: { type: String, required: false },
});

const ProjectSchema = new Schema<TProject>({
  name: { type: String, required: true },
  description: { type: String, required: false },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: false },
  technologies: { type: [String], default: [] },
  repositoryUrl: { type: String, required: false },
  liveDemoUrl: { type: String, required: false },
  images: { type: [String], default: [] },
  videoDemoUrl: { type: String, required: false },
  achievements: { type: [String], default: [] },
  contributors: { type: [ContributorSchema], default: [] },
  projectNumber: { type: Number, unique: true, required: true },
  isDeleted: { type: Boolean, default: false },
});

// Middleware to auto-increment projectNumber before saving
ProjectSchema.pre("save", async function (next) {
  if (this.isNew) {
    const lastProject = await Project.findOne({}, { projectNumber: 1 })
      .sort({ projectNumber: -1 })
      .exec();
    this.projectNumber = lastProject ? lastProject.projectNumber + 1 : 1;
  }
  next();
});

export const Project = model<TProject, ProjectModel>("Project", ProjectSchema);
