import { Router } from "express";
import { AchievementRoutes } from "../modules/Achievement/achievement.route";
import { BlgoRoutes } from "../modules/Blogs/blog.route";
import { EducationRoutes } from "../modules/Education/education.route";
import { ExperienceRoutes } from "../modules/Experience/experience.route";
import { PersonalRoutes } from "../modules/PersonalInfo/personal.route";
import { SkillRoutes } from "../modules/Skills/skill.route";
import { ProjectRoutes } from "../modules/Projects/project.route";
import { AuthRoutes } from "../modules/Auth/auth.route";

const router = Router();

const moduleRoutes = [
  {
    path: `/auth`,
    route: AuthRoutes,
  },
  {
    path: `/achievement`,
    route: AchievementRoutes,
  },
  {
    path: `/blog`,
    route: BlgoRoutes,
  },
  {
    path: `/education`,
    route: EducationRoutes,
  },
  {
    path: `/experience`,
    route: ExperienceRoutes,
  },
  {
    path: `/personal-info`,
    route: PersonalRoutes,
  },
  {
    path: `/projects`,
    route: ProjectRoutes,
  },
  {
    path: `/skills`,
    route: SkillRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
