import AppDataSource from "../../data-source";
import { Category } from "../../entities/categories.entity";
import { AppError } from "../../errors/AppError";
import { ICategoryRequest } from "../../interfaces/categories";

const createCategoryService = async (category: ICategoryRequest) => {
  const categoryRepository = AppDataSource.getRepository(Category);

  const verifyCategoryExists = await categoryRepository.findOneBy({
    name: category.name,
  });

  if (verifyCategoryExists) {
    throw new AppError("category already exists!", 409);
  }

  const newCategory = categoryRepository.create(category);

  await categoryRepository.save(newCategory);

  return newCategory;
};

export default createCategoryService;
