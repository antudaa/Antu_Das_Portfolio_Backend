import express from "express";
import requestValidator from "../../middlewares/validateRequest";
import { ProjectValidationSchema } from "./project.validation";
import { ProjectController } from "./project.controller";
import { authenticateUser, authorizeAdmin } from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/",
  authenticateUser,
  authorizeAdmin,
  requestValidator(ProjectValidationSchema),
  ProjectController.createProject,
);

router.patch(
  "/:id",
  authenticateUser,
  authorizeAdmin,
  ProjectController.updateProject,
);

router.delete(
  "/:id",
  authenticateUser,
  authorizeAdmin,
  ProjectController.deleteProject,
);

router.get("/:id", ProjectController.findProjectById);

router.get("/", ProjectController.getAllProjects);

export const ProjectRoutes = router;
