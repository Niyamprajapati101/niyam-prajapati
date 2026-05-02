import { AppError } from "../utils/errors.js";

export function createResourceController(Model) {
  return {
    getPublic: async (_req, res, next) => {
      try {
        const items = await Model.find().sort({ createdAt: -1 });
        return res.status(200).json(items);
      } catch (error) {
        next(error);
      }
    },
    getAdmin: async (_req, res, next) => {
      try {
        const items = await Model.find().sort({ createdAt: -1 });
        return res.status(200).json(items);
      } catch (error) {
        next(error);
      }
    },
    create: async (req, res, next) => {
      try {
        if (!req.body || Object.keys(req.body).length === 0) {
          throw new AppError("Request body cannot be empty", 400);
        }
        const item = await Model.create(req.body);
        return res.status(201).json(item);
      } catch (error) {
        next(error);
      }
    },
    update: async (req, res, next) => {
      try {
        if (!req.params.id) {
          throw new AppError("ID is required", 400);
        }
        const item = await Model.findByIdAndUpdate(req.params.id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!item) {
          throw new AppError(`${Model.modelName} not found`, 404);
        }
        return res.status(200).json(item);
      } catch (error) {
        next(error);
      }
    },
    remove: async (req, res, next) => {
      try {
        if (!req.params.id) {
          throw new AppError("ID is required", 400);
        }
        const item = await Model.findByIdAndDelete(req.params.id);
        if (!item) {
          throw new AppError(`${Model.modelName} not found`, 404);
        }
        return res.status(200).json({ message: "Deleted successfully" });
      } catch (error) {
        next(error);
      }
    },
  };
}
