import Profile from "../models/Profile.js";
import { AppError } from "../utils/errors.js";

export async function getProfile(req, res, next) {
  try {
    const profile = await Profile.findOne().sort({ createdAt: -1 });

    if (!profile) {
      throw new AppError("Profile not found", 404);
    }

    return res.status(200).json(profile);
  } catch (error) {
    next(error);
  }
}
