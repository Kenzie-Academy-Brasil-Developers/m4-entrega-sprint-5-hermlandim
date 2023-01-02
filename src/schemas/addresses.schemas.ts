import * as yup from "yup";
import { SchemaOf } from "yup";

export const addressesSchema = yup.object().shape({
  district: yup.string().notRequired(),
  zipCode: yup.string().max(8).notRequired(),
  number: yup.string().notRequired(),
  city: yup.string().notRequired(),
  state: yup.string().max(2).notRequired(),
});
