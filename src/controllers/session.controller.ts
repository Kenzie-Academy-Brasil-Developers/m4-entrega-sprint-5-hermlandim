import { Request, Response } from "express";
import createSessionService from "../services/Sessions/createSession.service";
import { IUserLogin } from "../interfaces/users/index";

const createSessionController = async (req: Request, res: Response) => {
  const bodyRequest: IUserLogin = req.body;

  const token = await createSessionService(bodyRequest);

  return res.status(200).json({ token });
};

export { createSessionController };
