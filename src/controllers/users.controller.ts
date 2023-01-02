import { Request, Response } from "express";
import { IUserRequest, IUserUpdate } from "../interfaces/users";
import createUserService from "../services/Users/createUser.service";
import deleteUserService from "../services/Users/deleteUser.service";
import listUsersService from "../services/Users/listUsers.service";
import updateUserService from "../services/Users/updateUser.service";

const createUserController = async (req: Request, res: Response) => {
  const userData: IUserRequest = req.body;

  const newUser = await createUserService(userData);

  return res.status(201).json(newUser);
};

const listUsersController = async (req: Request, res: Response) => {
  const users = await listUsersService();

  return res.status(200).json(users);
};

const updateUserController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const reqBody: IUserUpdate = req.body;
  const reqUser = req;

  const newUser = await updateUserService(userId, reqBody, reqUser);

  return res.status(200).json(newUser);
};

const deleteUserController = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const deletedUser = await deleteUserService(userId);

  return res.status(204).json(deletedUser);
};

export {
  createUserController,
  listUsersController,
  updateUserController,
  deleteUserController,
};
