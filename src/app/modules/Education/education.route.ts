import express from "express";
import requestValidator from "../../middlewares/validateRequest";
import { EducationValidationSchema } from "./education.validation";
import { EducationController } from "./education.controller";
import { authenticateUser, authorizeAdmin } from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/",
  authenticateUser,
  authorizeAdmin,
  requestValidator(EducationValidationSchema),
  EducationController.createEducation,
);

router.patch(
  "/:id",
  authenticateUser,
  authorizeAdmin,
  EducationController.updateEducation,
);

router.delete(
  "/:id",
  authenticateUser,
  authorizeAdmin,
  EducationController.deleteEducation,
);

router.get("/:id", EducationController.findEducationById);

router.get("/", EducationController.findAllEducation);

export const EducationRoutes = router;
