import { Request, Response } from "express";
import { IAddressRequest } from "../interfaces/properties";
import { createAddressService } from "../services/Addresses/createAddress.service";
import { listAllAddressesService } from "../services/Addresses/listAllAddresses.service";

export const createAddressController = async (req: Request, res: Response) => {
  const address: IAddressRequest = req.body;

  const newAddress = await createAddressService(address);

  return res.status(201).json(newAddress);
};

export const listAllAddressesController = async (
  req: Request,
  res: Response
) => {
  const addresses = await listAllAddressesService();

  return res.status(200).json(addresses);
};
