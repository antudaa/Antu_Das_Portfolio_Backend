import express from "express";
import requestValidator from "../../middlewares/validateRequest";
import { createUserValidationSchema } from "./auth.validation";
import { AuthControllers } from "./auth.controller";

const router = express.Router();

router.post(
  "/registration",
  requestValidator(createUserValidationSchema),
  AuthControllers.Registration,
);

router.post("/login", AuthControllers.loginUser);

// router.post('/change-password',
//     AuthControllers.changePassword,
// );

router.post("/refresh-token", AuthControllers.refreshToken);

export const AuthRoutes = router;
