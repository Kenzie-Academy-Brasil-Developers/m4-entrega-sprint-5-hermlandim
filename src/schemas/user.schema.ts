import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUser, IUserRequest, IUserUpdate } from "../interfaces/users";

const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().max(50).required(),
  email: yup.string().max(50).email().required(),
  password: yup.string().max(120).required(),
  isAdm: yup.boolean().required(),
});

const userReturnedDataSchema: SchemaOf<IUser> = yup.object().shape({
  id: yup.string().notRequired(),
  name: yup.string().notRequired(),
  email: yup.string().email().notRequired(),
  isAdm: yup.boolean().notRequired(),
  createdAt: yup.date().notRequired(),
  updatedAt: yup.date().notRequired(),
  isActive: yup.boolean().notRequired(),
  deletedAt: yup.date().nullable().notRequired(),
});

const userUpdateSchema: SchemaOf<IUserUpdate> = yup.object().shape({
  email: yup.string().email().notRequired(),
  name: yup.string().notRequired(),
  password: yup.string().notRequired(),
  isAdm: yup.boolean().notRequired(),
});

const listUsersReturnedData = yup.array(userReturnedDataSchema);

export {
  userSchema,
  userReturnedDataSchema,
  listUsersReturnedData,
  userUpdateSchema,
};
