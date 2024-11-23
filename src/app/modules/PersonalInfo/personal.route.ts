import express from "express";
import requestValidator from "../../middlewares/validateRequest";
import { PersonalInfoValidationSchema } from "./personal.validation";
import { PersonalInfoController } from "./personal.controller";
import { authenticateUser, authorizeAdmin } from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/",
  authenticateUser,
  authorizeAdmin,
  requestValidator(PersonalInfoValidationSchema),
  PersonalInfoController.createPersonalInfo,
);

router.patch(
  "/:id",
  authenticateUser,
  authorizeAdmin,
  PersonalInfoController.updatePersonalInfo,
);

router.get("/", PersonalInfoController.getPersonalInfo);

router.get("/:email", PersonalInfoController.getPersonalInfoById);

export const PersonalRoutes = router;
