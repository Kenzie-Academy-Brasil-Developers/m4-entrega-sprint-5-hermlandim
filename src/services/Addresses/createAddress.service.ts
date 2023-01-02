import AppDataSource from "../../data-source";
import { Addresses } from "../../entities/addresses.entity";
import { IAddressRequest } from "../../interfaces/properties";

export const createAddressService = async (address: IAddressRequest) => {
  const addressRepository = AppDataSource.getRepository(Addresses);

  const newAddress = addressRepository.create(address);

  await addressRepository.save(newAddress);

  return newAddress;
};
