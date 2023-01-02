import { NextFunction, Request, response, Response } from "express";
import { AppError } from "./AppError";

const handleError = async (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      message: error.message,
    });
  }

  console.log(error);

  return response.status(500).json({
    message: "Internal server error",
  });
};

export default handleError;
