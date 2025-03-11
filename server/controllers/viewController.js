const View = require('../models/View');

exports.getViews = async (req, res) => {
    try {
      const views = await View.find();
      res.status(200).json(views);
    } catch (error) {
      res.status(500).json({ message: "Error retrieving views", error: error.message });
    }
  };

exports.submitView = async (req, res) => {
  try {
    const { content } = req.body;

    // ✅ Validate input
    if (!content || content.trim() === "") {
      return res.status(400).json({ message: "Content cannot be empty" });
    }

    const newView = new View({ content });
    await newView.save();

    res.status(201).json({ message: "View saved successfully!", view: newView });
  } catch (error) {
    res.status(500).json({ message: "Error saving view", error: error.message });
  }
};
