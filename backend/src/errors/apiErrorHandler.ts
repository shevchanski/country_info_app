import { NextFunction, Request, Response } from "express";
import APIError from "./api.error";
import RES_STATUS from "../config/status.config";

function apiErrorHandler(
  error: APIError,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction,
) {
  const { statusCode = RES_STATUS.INTERNAL_ERR, message } = error;

  res.status(statusCode).json({ message, statusCode });
}

export default apiErrorHandler;
