import { Router } from "express";
import {
  createCategoryController,
  listAllCategoriesController,
  listAllPropertiesByCategoryController,
} from "../controllers/categories.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";

export const categoriesRoutes = Router();

categoriesRoutes.post(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  createCategoryController
);

categoriesRoutes.get("", listAllCategoriesController);

categoriesRoutes.get("/:id/properties", listAllPropertiesByCategoryController);
