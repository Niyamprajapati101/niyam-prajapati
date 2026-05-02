import Message from "../models/Message.js";
import { AppError } from "../utils/errors.js";

export async function createMessage(req, res, next) {
  try {
    const { name, email, subject, message: messageText } = req.body;

    if (!name || !email || !subject || !messageText) {
      throw new AppError(
        "Name, email, subject, and message are required",
        400
      );
    }

    const message = await Message.create(req.body);
    return res.status(201).json(message);
  } catch (error) {
    next(error);
  }
}

export async function getMessages(req, res, next) {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    return res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
}
