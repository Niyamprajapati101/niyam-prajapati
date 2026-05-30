import Message from "../models/Message.js";
import { AppError } from "../utils/errors.js";
import { sendContactEmail } from "../utils/sendEmail.js";

export async function createMessage(req, res, next) {
  try {
    const { name, email, message: messageText } = req.body;

    if (!name || !email || !messageText) {
      throw new AppError("Name, email, and message are required", 400);
    }

    const message = await Message.create({ name, email, message: messageText });

    // Send email notification (don't block the response if it fails)
    try {
      await sendContactEmail({ name, email, message: messageText });
    } catch (emailError) {
      console.error("Failed to send email notification:", emailError.message);
    }

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
