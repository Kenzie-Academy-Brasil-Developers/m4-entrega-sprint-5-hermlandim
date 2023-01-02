import { Router } from "express";
import {
  createPropertieController,
  listAllPropertiesController,
} from "../controllers/properties.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import { propertySchema } from "../schemas/properties.schema";

export const propertiesRoutes = Router();

propertiesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  ensureDataIsValid(propertySchema),
  createPropertieController
);
propertiesRoutes.get("", listAllPropertiesController);
