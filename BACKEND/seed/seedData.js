import "dotenv/config";
import bcrypt from "bcryptjs";
import { connectDatabase } from "../config/db.js";
import Certification from "../models/Certification.js";
import Education from "../models/Education.js";
import Experience from "../models/Experience.js";
import Message from "../models/Message.js";
import Profile from "../models/Profile.js";
import Project from "../models/Project.js";
import User from "../models/User.js";

await connectDatabase();

await Promise.all([
  Profile.deleteMany({}),
  Project.deleteMany({}),
  Experience.deleteMany({}),
  Education.deleteMany({}),
  Certification.deleteMany({}),
  Message.deleteMany({}),
  User.deleteMany({}),
]);

await Profile.create({
  name: "NIYAM PRAJAPATI",
  title: "MERN Stack Developer",
  subtitle: "Developer",
  location: "Your City, Country",
  email: "hello@example.com",
  bio: "I design and build expressive digital products with modern MERN tooling, strong UI taste, and a focus on performance.",
  about:
    "I am a full stack developer who enjoys turning product ideas into polished, maintainable experiences. My work blends React-first interfaces, thoughtful backend APIs, and a strong eye for typography, spacing, and motion. Outside work, I enjoy coding side projects, training in the gym, playing games, and learning more about design systems.",
  profileImage:
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  interests: ["Coding", "Gym", "Gaming", "Design Systems", "Travel"],
  highlightMetrics: [
    { label: "Years of practice", value: "03+" },
    { label: "Projects delivered", value: "18" },
    { label: "UI systems built", value: "09" },
    { label: "Client retention", value: "96%" },
  ],
  skills: {
    frontend: ["React", "HTML", "CSS", "Tailwind CSS", "JavaScript"],
    backend: ["Node.js", "Express.js"],
    database: ["MongoDB", "Supabase", "PostgreSQL"],
    tools: ["Git", "Figma", "Postman", "Vercel"],
  },
});

await Project.insertMany([
  {
    title: "Luxe Atelier",
    category: "Brand Commerce",
    description:
      "A refined fashion commerce experience with animated collections, CMS-driven product stories, and premium checkout flows.",
    techStack: ["React", "Tailwind", "Node.js", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1400&q=80",
    liveLink: "https://example.com/luxe-atelier",
    githubLink: "https://github.com/yourusername/luxe-atelier",
    featured: true,
  },
  {
    title: "Pulse Admin OS",
    category: "Operations Dashboard",
    description:
      "An internal analytics suite with clear KPI storytelling, role-based controls, and a performance-focused React interface.",
    techStack: ["React", "Framer Motion", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    liveLink: "https://example.com/pulse-admin",
    githubLink: "https://github.com/yourusername/pulse-admin",
    featured: true,
  },
  {
    title: "Nomad Journal",
    category: "Content Platform",
    description:
      "A cinematic travel storytelling platform with editorial layouts, image lazy loading, and SEO-first architecture.",
    techStack: ["Vite", "React", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80",
    liveLink: "https://example.com/nomad-journal",
    githubLink: "https://github.com/yourusername/nomad-journal",
    featured: true,
  },
]);

await Experience.insertMany([
  {
    company: "Studio North",
    role: "Frontend Developer",
    duration: "2024 - Present",
    description:
      "Building responsive React interfaces, reusable design systems, and animation-driven landing experiences for product teams.",
  },
  {
    company: "Code Harbor",
    role: "Full Stack Developer",
    duration: "2022 - 2024",
    description:
      "Created APIs, dashboards, and deployment workflows across the MERN stack for startup and agency clients.",
  },
]);

await Education.insertMany([
  {
    degree: "B.Tech in Computer Science",
    institution: "Your University",
    year: "2022",
    score: "8.7 CGPA",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Your School",
    year: "2018",
    score: "89%",
  },
]);

await Certification.insertMany([
  {
    course: "The Complete Web Development Bootcamp",
    platform: "Udemy",
    year: "2023",
    description: "Advanced frontend, backend, and deployment workflows.",
  },
  {
    course: "Meta Front-End Developer",
    platform: "Coursera",
    year: "2024",
    description: "Component architecture, accessibility, and modern UI patterns.",
  },
]);

await Message.insertMany([
  {
    name: "Aarav Mehta",
    email: "aarav@example.com",
    message: "Loved the work. Would like to discuss a product design and development engagement.",
  },
]);

const hashedPassword = await bcrypt.hash("admin123", 10);

await User.create({
  name: "Portfolio Admin",
  email: "admin@niyam.dev",
  password: hashedPassword,
});

console.log("Seed data inserted successfully.");
process.exit(0);
