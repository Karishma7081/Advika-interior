import mongoose from "mongoose";

const consultationSchema = new mongoose.Schema(
  {
    location: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Consultation", consultationSchema);
