import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDatabase } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import projectsRoutes from "./routes/projectsRoutes.js";
import experiencesRoutes from "./routes/experiencesRoutes.js";
import educationRoutes from "./routes/educationRoutes.js";
import certificationsRoutes from "./routes/certificationsRoutes.js";
import messagesRoutes from "./routes/messagesRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const app = express();
const port = process.env.PORT || 10000;

// Initialize database connection (non-blocking)
let dbConnected = false;
connectDatabase()
  .then(() => {
    dbConnected = true;
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error (server will continue):", err.message);
  });

// CORS configuration for Render deployment
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      // Allow any localhost or 127.0.0.1 origin during development
      if (origin.match(/^https?:\/\/(localhost|127\.0\.0\.1):\d+$/)) {
        return callback(null, true);
      }

      // Allow specific production origins
      const allowedOrigins = [
        "http://localhost:5173",
        "http://localhost:5174",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174",
        "https://npprajapati.onrender.com",
        "https://niyamprajapati01.onrender.com",
        "https://portfolio-frontend.onrender.com",
        "https://niyam-prajapati.vercel.app"
      ];

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      // In production, allow same origin
      if (process.env.NODE_ENV === "production") {
        return callback(null, true);
      }

      return callback(new Error('Not allowed by CORS'));
    },
    credentials: true,
  })
);

app.use(express.json());

// Health check endpoint
app.get("/", (_req, res) => {
  res.json({ 
    message: "Portfolio API is running.",
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});

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

// Start server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

export default app;
