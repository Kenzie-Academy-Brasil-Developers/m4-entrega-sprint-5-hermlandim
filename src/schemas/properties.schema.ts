import * as yup from "yup";
import { SchemaOf } from "yup";
import { IPropertyRequest } from "../interfaces/properties";
import { addressesSchema } from "./addresses.schemas";

export const propertySchema: SchemaOf<IPropertyRequest> = yup.object().shape({
  value: yup.number(),
  size: yup.number(),
  address: addressesSchema,
  categoryId: yup.string(),
  category: yup.string(),
});

export const returnedPropertiesSchema = yup.object().shape({
  id: yup.string().notRequired(),
  sold: yup.boolean().notRequired(),
  value: yup.string().notRequired(),
  size: yup.number().notRequired(),
  address: addressesSchema,
  category: yup.string().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
});
