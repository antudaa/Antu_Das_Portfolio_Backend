import { Types } from "mongoose";
import { Skill } from "./skill.model";
import { TSkill } from "./skill.interface";

const createSkill = async (payload: TSkill) => {
  const result = await Skill.create(payload);
  return result;
};

const updateSkill = async (id: Types.ObjectId, payload: Partial<TSkill>) => {
  const result = await Skill.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteSkill = async (id: Types.ObjectId) => {
  const result = await Skill.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true },
  );
  return result;
};

const findSkillById = async (id: Types.ObjectId) => {
  const result = await Skill.findById(id);
  return result;
};

const getAllSkills = async () => {
  const result = await Skill.find();
  return result;
};

export const SkillService = {
  createSkill,
  updateSkill,
  deleteSkill,
  findSkillById,
  getAllSkills,
};
