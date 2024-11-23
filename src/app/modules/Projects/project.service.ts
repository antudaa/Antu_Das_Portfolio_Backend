import { Types } from "mongoose";
import { Project } from "./project.model";
import { TProject } from "./project.interface";

const createProject = async (payload: TProject) => {
  const result = await Project.create(payload);
  return result;
};

const updateProject = async (
  id: Types.ObjectId,
  payload: Partial<TProject>,
) => {
  const result = await Project.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteProject = async (id: Types.ObjectId) => {
  const result = await Project.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

const findProjectById = async (id: Types.ObjectId) => {
  const result = await Project.findById(id);
  return result;
};

const getAllProjects = async () => {
  const result = await Project.find();
  return result;
};

export const ProjectService = {
  createProject,
  updateProject,
  deleteProject,
  findProjectById,
  getAllProjects,
};
