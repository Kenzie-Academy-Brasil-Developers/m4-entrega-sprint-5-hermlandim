import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";

export const listAllPropertiesService = async () => {
  const propertieRepository = AppDataSource.getRepository(Properties);

  const properties = await propertieRepository.find();

  return properties;
};
