import { Router } from "express";
import {
  createScheduleController,
  listAllSchedulesByPropertieController,
} from "../controllers/schedules.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import { schedulesSchema } from "../schemas/schedules.schemas";

export const schedulesRoutes = Router();

schedulesRoutes.post(
  "",
  ensureAuthMiddleware,
  // ensureDataIsValid(schedulesSchema),
  createScheduleController
);
schedulesRoutes.get(
  "/properties/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  listAllSchedulesByPropertieController
);
