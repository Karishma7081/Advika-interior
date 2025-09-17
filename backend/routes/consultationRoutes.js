// backend/routes/consultationRoutes.js
import express from "express";
import Consultation from "../models/Consultation.js";
import ExcelJS from "exceljs";

const router = express.Router();

/**
 * @route   POST /api/consultation
 * @desc    Create a new consultation entry
 */
router.post("/", async (req, res) => {
  const { propertyLocation, name, phone, email } = req.body;

  if (!propertyLocation || !name || !phone) {
    return res
      .status(400)
      .json({ message: "All required fields must be filled" });
  }

  try {
    const newConsultation = await Consultation.create({
      propertyLocation,
      name,
      phone,
      email,
    });

    res.status(201).json({
      message: "Consultation saved successfully",
      data: newConsultation,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
});

/**
 * @route   GET /api/consultation
 * @desc    Get all consultation entries
 */
router.get("/", async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 });
    res.json(consultations);
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
});

/**
 * @route   GET /api/consultation/export
 * @desc    Export all consultations to Excel
 */
router.get("/export", async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Consultations");

    worksheet.columns = [
      { header: "Location", key: "propertyLocation", width: 20 },
      { header: "Name", key: "name", width: 20 },
      { header: "Phone", key: "phone", width: 15 },
      { header: "Email", key: "email", width: 25 },
      { header: "Created At", key: "createdAt", width: 25 },
    ];

    consultations.forEach((c) => {
      worksheet.addRow({
        propertyLocation: c.propertyLocation,
        name: c.name,
        phone: c.phone,
        email: c.email || "",
        createdAt: c.createdAt.toLocaleString(),
      });
    });

    res.setHeader(
      "Content-Type",
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    );
    res.setHeader(
      "Content-Disposition",
      "attachment; filename=consultations.xlsx"
    );

    await workbook.xlsx.write(res);
    res.end();
  } catch (err) {
    res.status(500).json({ message: "Server error: " + err.message });
  }
});

export default router;
