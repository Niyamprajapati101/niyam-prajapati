import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { connectDatabase } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import projectsRoutes from "./routes/projectsRoutes.js";
import experiencesRoutes from "./routes/experiencesRoutes.js";
import educationRoutes from "./routes/educationRoutes.js";
import certificationsRoutes from "./routes/certificationsRoutes.js";
import messagesRoutes from "./routes/messagesRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const clientPath = path.join(__dirname, "../client/dist");

const app = express();
const port = process.env.PORT || 5000;

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

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);
      
      // Allow any localhost or 127.0.0.1 origin during development
      if (origin.match(/^https?:\/\/(localhost|127\.0\.0\.1):\d+$/)) {
        return callback(null, true);
      }
      
      // Allow specific production origins here if needed
      const allowedOrigins = [
        "http://localhost:5173",
        "http://localhost:5174", 
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5174",
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

app.get("/", (_req, res) => {
  res.json({ message: "Portfolio API is running." });
});

app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/projects", projectsRoutes);
app.use("/api/experiences", experiencesRoutes);
app.use("/api/education", educationRoutes);
app.use("/api/certifications", certificationsRoutes);
app.use("/api/messages", messagesRoutes);

// Serve static frontend files (production only)
if (process.env.NODE_ENV === "production") {
  app.use(express.static(clientPath));

  // Fallback to index.html for React Router (SPA)
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientPath, "index.html"));
  });
}

app.use(notFound);
app.use(errorHandler);

// Only listen in development/local environment
if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

export default app;
