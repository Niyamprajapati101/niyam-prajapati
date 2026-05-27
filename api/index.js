import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDatabase } from "../BACKEND/config/db.js";
import authRoutes from "../BACKEND/routes/authRoutes.js";
import profileRoutes from "../BACKEND/routes/profileRoutes.js";
import projectsRoutes from "../BACKEND/routes/projectsRoutes.js";
import experiencesRoutes from "../BACKEND/routes/experiencesRoutes.js";
import educationRoutes from "../BACKEND/routes/educationRoutes.js";
import certificationsRoutes from "../BACKEND/routes/certificationsRoutes.js";
import messagesRoutes from "../BACKEND/routes/messagesRoutes.js";
import { errorHandler, notFound } from "../BACKEND/middleware/errorMiddleware.js";

const app = express();

// Initialize database connection
let dbConnected = false;
connectDatabase()
  .then(() => {
    dbConnected = true;
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

// CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      // Allow all Vercel preview and production URLs
      if (origin.match(/\.vercel\.app$/)) return callback(null, true);
      if (origin.match(/^https?:\/\/(localhost|127\.0\.0\.1):\d+$/)) {
        return callback(null, true);
      }
      if (process.env.NODE_ENV === "production") {
        return callback(null, true);
      }
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json());

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/experiences", experiencesRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/certifications", certificationsRoutes);
app.use("/api/messages", messagesRoutes);

// Error handlers
app.use(notFound);
app.use(errorHandler);

export default app;
