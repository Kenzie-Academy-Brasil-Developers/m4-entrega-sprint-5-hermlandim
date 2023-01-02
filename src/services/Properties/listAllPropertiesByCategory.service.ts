import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/AppError";

export const listAllPropertiesByCategoryService = async (
  idCategory: string
) => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const propertiesByCategory = await categoryRepository.findOne({
    where: {
      id: idCategory,
    },
    relations: {
      properties: true,
    },
  });

  if (!propertiesByCategory) {
    throw new AppError("Invalid id", 404);
  }

  return propertiesByCategory;
};
