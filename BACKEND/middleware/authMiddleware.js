import jwt from "jsonwebtoken";
import { AppError } from "../utils/errors.js";

export function protect(req, res, next) {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader?.startsWith("Bearer ")) {
      throw new AppError("Authorization token missing", 401);
    }

    try {
      const token = authHeader.split(" ")[1];
      req.user = jwt.verify(token, process.env.JWT_SECRET);
      return next();
    } catch (error) {
      throw new AppError("Invalid or expired token", 401);
    }
  } catch (error) {
    next(error);
  }
}
