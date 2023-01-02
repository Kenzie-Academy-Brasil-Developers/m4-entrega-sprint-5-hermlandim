import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entity";
import { Category } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/AppError";
import { IAddressRequest, IPropertyRequest } from "../../interfaces/properties";
import { returnedPropertiesSchema } from "../../schemas/properties.schema";
import { createAddressService } from "../Addresses/createAddress.service";

export const createPropertieService = async (propertie: IPropertyRequest) => {
  const propertieRepository = AppDataSource.getRepository(Properties);
  const addressRepository = AppDataSource.getRepository(Addresses);
  const categoriesRepository = AppDataSource.getRepository(Category);

  propertie.category = propertie.categoryId;

  delete propertie["categoryId"];

  const findAddressExists = await addressRepository.findOneBy({
    district: propertie.address.district,
    number: propertie.address.number,
  });
  if (findAddressExists) {
    throw new AppError("Property or Adress already exists!", 409);
  }

  const findDataAdressExists = await addressRepository.findOneBy({
    zipCode: propertie.address.zipCode,
  });

  const findCategoryId = await categoriesRepository.findOneBy({
    id: propertie.category,
  });

  if (!findCategoryId) {
    throw new AppError("Category not found", 404);
  }

  const address = await createAddressService(propertie.address);

  const newPropertie = propertieRepository.create({
    ...propertie,
    address,
  });

  console.log(newPropertie);

  await propertieRepository.save(newPropertie);

  // const returnedData = await propertiesSchema.validate(newPropertie, {
  //   stripUnknown: true,
  // });

  return newPropertie;
};
