import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema(
  {
    course: { type: String, required: true },
    platform: { type: String, required: true },
    year: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Certification", certificationSchema);
