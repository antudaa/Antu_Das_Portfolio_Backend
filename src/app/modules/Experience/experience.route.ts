import express from "express";
import requestValidator from "../../middlewares/validateRequest";
import { ExperienceValidationSchema } from "./experience.validation";
import { ExperienceController } from "./experience.controller";
import { authenticateUser, authorizeAdmin } from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/",
  authenticateUser,
  authorizeAdmin,
  requestValidator(ExperienceValidationSchema),
  ExperienceController.createExperience,
);

router.patch(
  "/:id",
  authenticateUser,
  authorizeAdmin,
  ExperienceController.updateExperience,
);

router.delete(
  "/:id",
  authenticateUser,
  authorizeAdmin,
  ExperienceController.deleteExperience,
);

router.get("/:id", ExperienceController.findExperienceById);

router.get("/", ExperienceController.findAllExperience);

export const ExperienceRoutes = router;
