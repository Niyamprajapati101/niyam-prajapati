import { Router } from "express";
import Education from "../models/Education.js";
import { createResourceController } from "../controllers/resourceControllerFactory.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();
const controller = createResourceController(Education);

router.get("/", controller.getPublic);
router.get("/admin/all", protect, controller.getAdmin);
router.post("/", protect, controller.create);
router.put("/:id", protect, controller.update);
router.delete("/:id", protect, controller.remove);

export default router;
