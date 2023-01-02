import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";

export const listAllCategoriesService = async () => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const categories = await categoryRepository.find();

  return categories;
};
