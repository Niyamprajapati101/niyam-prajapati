import "dotenv/config";
import bcrypt from "bcryptjs";
import { connectDatabase } from "./config/db.js";
import Certification from "./models/Certification.js";
import Education from "./models/Education.js";
import Experience from "./models/Experience.js";
import Message from "./models/Message.js";
import Profile from "./models/Profile.js";
import Project from "./models/Project.js";
import User from "./models/User.js";

await connectDatabase();

console.log("🗑️  Clearing all seed data...");

// Clear all collections
await Promise.all([
  Profile.deleteMany({}),
  Project.deleteMany({}),
  Experience.deleteMany({}),
  Education.deleteMany({}),
  Certification.deleteMany({}),
  Message.deleteMany({}),
  User.deleteMany({}),
]);

console.log("✅ All seed data cleared!");

// Create only essential data for the portfolio to work
console.log("📝 Creating minimal real data structure...");

// Create your real profile
await Profile.create({
  name: "NIYAM PRAJAPATI",
  title: "MERN Stack Developer",
  subtitle: "Developer + Designer",
  location: "India",
  email: "niyam@example.com",
  bio: "A passionate full-stack developer crafting modern web experiences with clean code and thoughtful design.",
  about: "I'm NIYAM PRAJAPATI, a dedicated MERN stack developer who loves building scalable web applications. I focus on creating user-friendly interfaces and robust backend systems. Currently expanding my skills in modern web technologies and always eager to take on new challenges.",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
  interests: ["Web Development", "UI/UX Design", "Problem Solving", "Learning New Tech"],
  highlightMetrics: [
    { label: "Years Learning", value: "02+" },
    { label: "Projects Built", value: "05+" },
    { label: "Technologies", value: "10+" },
    { label: "Passion Level", value: "100%" },
  ],
  skills: {
    frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Node.js", "Express.js", "MongoDB"],
    database: ["MongoDB", "MySQL"],
    tools: ["Git", "VS Code", "Postman", "Figma"],
  },
});

// Create admin user
const hashedPassword = await bcrypt.hash("admin123", 10);
await User.create({
  name: "Niyam Prajapati",
  email: "admin@niyam.dev",
  password: hashedPassword,
});

console.log("✅ Minimal real data created!");
console.log("🔐 Admin login: admin@niyam.dev / admin123");
console.log("📋 Now you can add your real projects, experience, and education through the admin panel!");

process.exit(0);