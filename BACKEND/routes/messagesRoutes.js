import { Router } from "express";
import { createMessage, getMessages } from "../controllers/messagesController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/", createMessage);
router.get("/", protect, getMessages);

export default router;
