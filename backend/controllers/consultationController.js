import Consultation from "../models/Consultation.js";
import ExcelJS from "exceljs";

// @desc Save a new consultation
export const createConsultation = async (req, res) => {
  try {
    const { location, name, phone, email } = req.body;

    if (!location || !name || !phone || !email) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newConsultation = new Consultation({ location, name, phone, email });
    await newConsultation.save();

    res.status(201).json({ message: "Consultation saved successfully" });
  } catch (error) {
    console.error("❌ Error creating consultation:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc Get all consultations
export const getConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 });
    res.json(consultations);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc Export consultations to Excel
export const exportConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 });

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Consultations");

    worksheet.columns = [
      { header: "Location", key: "location", width: 20 },
      { header: "Name", key: "name", width: 20 },
      { header: "Phone", key: "phone", width: 15 },
      { header: "Email", key: "email", width: 25 },
      { header: "Created At", key: "createdAt", width: 25 },
    ];

    consultations.forEach((c) => {
      worksheet.addRow({
        location: c.location,
        name: c.name,
        phone: c.phone,
        email: c.email,
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
  } catch (error) {
    console.error("❌ Error exporting consultations:", error);
    res.status(500).json({ message: "Server error" });
  }
};
