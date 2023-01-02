import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

const ensureIsAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isAdm = req.user.isAdm;

  if (!isAdm) {
    throw new AppError("You not is Adm!", 403);
  }

  return next();
};

export default ensureIsAdmMiddleware;
