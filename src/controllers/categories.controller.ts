import { Request, Response } from "express";
import { ICategoryRequest } from "../interfaces/categories";
import createCategoryService from "../services/Categories/createCategory.service";
import { listAllCategoriesService } from "../services/Categories/listAllCategories.service";
import { listAllPropertiesByCategoryService } from "../services/Properties/listAllPropertiesByCategory.service";

export const createCategoryController = async (req: Request, res: Response) => {
  const category: ICategoryRequest = req.body;

  const newCategory = await createCategoryService(category);

  return res.status(201).json(newCategory);
};

export const listAllCategoriesController = async (
  req: Request,
  res: Response
) => {
  const categories = await listAllCategoriesService();

  return res.status(200).json(categories);
};

export const listAllPropertiesByCategoryController = async (
  req: Request,
  res: Response
) => {
  const idCategory: string = req.params.id;

  const propertiesByCategory = await listAllPropertiesByCategoryService(
    idCategory
  );

  return res.status(200).json(propertiesByCategory);
};
