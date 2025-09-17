router.post("/", async (req, res) => {
  const { propertyLocation, name, phone, email } = req.body;
  if (!propertyLocation || !name || !phone) {
    return res
      .status(400)
      .json({ message: "All required fields must be filled!" });
  }

  try {
    const newConsultation = new Consultation({
      location: propertyLocation,
      name,
      phone,
      email,
    });
    const saved = await newConsultation.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
