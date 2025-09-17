import express from "express";
import mongoose from "mongoose";
import cors from "cors"; // ✅ import cors
import consultationRouter from "./routes/consultation.js";

const app = express();

// ✅ Enable CORS
app.use(cors());

// ✅ Parse JSON requests
app.use(express.json());

// ✅ Routes
app.use("/api/consultation", consultationRouter);

// ✅ Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/yourDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// ✅ Start server
app.listen(5000, () => console.log("Server running on http://localhost:5000"));
