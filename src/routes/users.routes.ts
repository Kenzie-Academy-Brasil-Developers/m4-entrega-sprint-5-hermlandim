import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  updateUserController,
} from "../controllers/users.controller";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValid } from "../middlewares/ensureDataIsValid.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureIsAdm.middleware";
import {
  userReturnedDataSchema,
  userSchema,
  userUpdateSchema,
} from "../schemas/user.schema";

const usersRoutes = Router();

usersRoutes.post("", ensureDataIsValid(userSchema), createUserController);
usersRoutes.get(
  "",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  listUsersController
);
usersRoutes.patch(
  "/:id",
  ensureAuthMiddleware,
  ensureDataIsValid(userReturnedDataSchema),
  updateUserController
);
usersRoutes.delete(
  "/:id",
  ensureAuthMiddleware,
  ensureIsAdmMiddleware,
  deleteUserController
);

export default usersRoutes;
