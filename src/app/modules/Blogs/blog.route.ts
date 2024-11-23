import express from "express";
import requestValidator from "../../middlewares/validateRequest";
import { BlogValidationSchema } from "./blog.validation";
import { BlogController } from "./blog.controller";
import { authenticateUser, authorizeAdmin } from "../../middlewares/auth";

const router = express.Router();

router.post(
  "/",
  authenticateUser,
  authorizeAdmin,
  requestValidator(BlogValidationSchema),
  BlogController.createBlog,
);

router.patch(
  "/:id",
  authenticateUser,
  authorizeAdmin,
  BlogController.updateBlog,
);

router.delete(
  "/:id",
  authenticateUser,
  authorizeAdmin,
  BlogController.deleteBlog,
);

router.get("/:id", BlogController.findBlogById);

router.get("/", BlogController.getAllBlogs);

export const BlgoRoutes = router;
