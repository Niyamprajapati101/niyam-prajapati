import "dotenv/config";
import { connectDatabase } from "./config/db.js";
import Profile from "./models/Profile.js";

await connectDatabase();

try {
  // Update only the name field, keep all other data
  const result = await Profile.updateOne(
    {}, // Find the first profile
    { name: "NIYAM PRAJAPATI" }, // Update only the name
    { upsert: false } // Don't create if doesn't exist
  );

  if (result.matchedCount > 0) {
    console.log("✅ Name updated successfully to 'NIYAM PRAJAPATI'");
  } else {
    console.log("❌ No profile found to update");
  }
} catch (error) {
  console.error("Error updating name:", error);
}

process.exit(0);