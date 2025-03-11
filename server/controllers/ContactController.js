const Contact = require("../models/schemacontact"); // Ensure this path is correct

const submitContactForm = async (req, res) => {
  try {
    console.log("🔹 Incoming Contact Request:", req.body); // ✅ Debug Log (Check incoming data)

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      console.log("❌ Missing Fields Detected:", { name, email, message });
      return res.status(400).json({ message: "All fields are required" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    console.log("✅ Contact saved successfully:", newContact);
    res.status(201).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Error saving contact:", error);
    res.status(500).json({ message: "Server error, please try again later." });
  }
};

module.exports = { submitContactForm };
