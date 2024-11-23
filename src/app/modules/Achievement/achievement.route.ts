import express from "express";
import requestValidator from "../../middlewares/validateRequest";
import { AchievementValidationSchema } from "./achievement.validation";
import { AchievementController } from "./achievement.controller";
import { authenticateUser, authorizeAdmin } from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/",
  authenticateUser,
  authorizeAdmin,
  requestValidator(AchievementValidationSchema),
  AchievementController.createAchievement,
);

router.patch(
  "/:id",
  authenticateUser,
  authorizeAdmin,
  AchievementController.updateAchievement,
);

router.delete(
  "/:id",
  authenticateUser,
  authorizeAdmin,
  AchievementController.deleteAchievement,
);

router.get("/:id", AchievementController.findAchievementById);

router.get("/", AchievementController.getAllAchievementData);

export const AchievementRoutes = router;
