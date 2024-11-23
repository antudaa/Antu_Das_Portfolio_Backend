import express from "express";
import requestValidator from "../../middlewares/validateRequest";
import { SkillValidationSchema } from "./skill.validation";
import { SkillController } from "./skill.controller";
import { authenticateUser, authorizeAdmin } from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/",
  authenticateUser,
  authorizeAdmin,
  requestValidator(SkillValidationSchema),
  SkillController.createSkill,
);

router.patch(
  "/:id",
  authenticateUser,
  authorizeAdmin,
  SkillController.updateSkill,
);

router.delete(
  "/:id",
  authenticateUser,
  authorizeAdmin,
  SkillController.deleteSkill,
);

router.get("/:id", SkillController.findSkillById);

router.get("/", SkillController.getAllSkills);

export const SkillRoutes = router;
