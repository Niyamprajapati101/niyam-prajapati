import mongoose from "mongoose";

const metricSchema = new mongoose.Schema(
  {
    label: { type: String, required: true },
    value: { type: String, required: true },
  },
  { _id: false }
);

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    location: { type: String, required: true },
    email: { type: String, required: true },
    bio: { type: String, required: true },
    about: { type: String, required: true },
    profileImage: { type: String, required: true },
    interests: [{ type: String, required: true }],
    highlightMetrics: [metricSchema],
    skills: {
      frontend: [{ type: String }],
      backend: [{ type: String }],
      database: [{ type: String }],
      tools: [{ type: String }],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Profile", profileSchema);
