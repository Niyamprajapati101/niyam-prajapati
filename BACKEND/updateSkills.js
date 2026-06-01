import "dotenv/config";
import { connectDatabase } from "./config/db.js";
import Profile from "./models/Profile.js";

await connectDatabase();

try {
  // Update skills with proper technology names that match our icons
  const result = await Profile.updateOne(
    {}, // Find the first profile
    {
      skills: {
        frontend: ["React", "HTML", "CSS", "Tailwind CSS", "JavaScript"],
        backend: ["Node.js", "Express.js"],
        database: ["MongoDB", "Supabase", "PostgreSQL"],
        tools: ["Git", "Figma", "Postman", "Vercel"],
      }
    },
    { upsert: false }
  );

  if (result.matchedCount > 0) {
    console.log("✅ Skills updated successfully with proper technology names");
  } else {
    console.log("❌ No profile found to update");
  }
} catch (error) {
  console.error("Error updating skills:", error);
}

process.exit(0);