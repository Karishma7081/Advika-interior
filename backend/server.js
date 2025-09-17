import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import multer from "multer";
import path from "path";
import fs from "fs";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Create upload folder if not exists
const uploadDir = process.env.UPLOAD_DIR || "uploads";
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

// Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error(err));

// Schema & Model
const applicationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    message: String,
    cvFile: String, // store uploaded file path
  },
  { timestamps: true }
);

const Application = mongoose.model("Application", applicationSchema);

// POST route: submit application with CV
app.post("/api/application", upload.single("cv"), async (req, res) => {
  const { name, phone, email, message } = req.body;

  if (!name || !phone || !email || !req.file) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newApp = await Application.create({
      name,
      phone,
      email,
      message,
      cvFile: req.file.path,
    });
    res.status(201).json({ message: "Application submitted!", data: newApp });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET route: fetch all applications
app.get("/api/application", async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.json(applications);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Serve uploaded CVs
app.use("/uploads", express.static(path.join(__dirname, uploadDir)));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
