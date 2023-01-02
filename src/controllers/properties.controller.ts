import { Request, Response } from "express";
import { IPropertyRequest } from "../interfaces/properties";
import { createPropertieService } from "../services/Properties/createPropertie.service";
import { listAllPropertiesService } from "../services/Properties/listAllProperties.service";

export const createPropertieController = async (
  req: Request,
  res: Response
) => {
  const propertie: IPropertyRequest = req.body;

  // propertie.category = propertie.categoryId;

  // delete propertie["categoryId"];

  const newPropertie = await createPropertieService(propertie);

  return res.status(201).json(newPropertie);
};

export const listAllPropertiesController = async (
  req: Request,
  res: Response
) => {
  const properties = await listAllPropertiesService();

  return res.status(200).json(properties);
};
