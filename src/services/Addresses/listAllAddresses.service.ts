import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entity";

export const listAllAddressesService = async () => {
  const addressRepository = AppDataSource.getRepository(Addresses);

  const addresses = await addressRepository.find();

  return addresses;
};
