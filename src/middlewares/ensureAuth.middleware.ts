import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const ensureAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token = req.headers.authorization;

  if (!token) {
    res.status(401).json({
      message: "Invalid token!",
    });
  }

  token = token?.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded: any) => {
    if (error) {
      res.status(401).json({
        message: "Invalid token!",
      });
    }

    req.user = {
      id: decoded.sub as string,
      isAdm: decoded.isAdm,
      isActive: decoded.isActive,
    };
  });

  return next();
};

export default ensureAuthMiddleware;
