const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
const DATABASE_URL = "mongodb://localhost:27017/tastythreads"; // Replace with your MongoDB URL
mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Schemas and Models

// Recipe Schema
const RecipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  likes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Recipe = mongoose.model("Recipe", RecipeSchema);

// User Schema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  likedRecipes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Recipe" }],
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserSchema);

// View Schema
const ViewSchema = new mongoose.Schema({
  recipeId: { type: mongoose.Schema.Types.ObjectId, ref: "Recipe", required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  timestamp: { type: Date, default: Date.now },
});

const View = mongoose.model("View", ViewSchema);

// Thought Submission Schema
const ThoughtSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

const Thought = mongoose.model("Thought", ThoughtSchema);

// Routes

// Add a recipe
app.post("/recipes", async (req, res) => {
  const { title, description, image } = req.body;
  try {
    const recipe = new Recipe({ title, description, image });
    await recipe.save();
    res.status(201).json({ message: "Recipe created successfully", recipe });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Like a recipe
app.post("/recipes/:id/like", async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  try {
    const recipe = await Recipe.findById(id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    recipe.likes += 1;
    await recipe.save();

    const user = await User.findById(userId);
    if (user) {
      user.likedRecipes.push(recipe._id);
      await user.save();
    }

    res.status(200).json({ message: "Recipe liked successfully", recipe });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Log a view
app.post("/recipes/:id/view", async (req, res) => {
  const { id } = req.params;
  const { userId } = req.body;

  try {
    const recipe = await Recipe.findById(id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    recipe.views += 1;
    await recipe.save();

    const view = new View({ recipeId: id, userId });
    await view.save();

    res.status(200).json({ message: "View logged successfully", recipe });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Submit a thought
app.post("/thoughts", async (req, res) => {
  const { userId, content } = req.body;

  try {
    const thought = new Thought({ userId, content });
    await thought.save();
    res.status(201).json({ message: "Thought submitted successfully", thought });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all thoughts
app.get("/thoughts", async (req, res) => {
  try {
    const thoughts = await Thought.find().populate("userId", "username");
    res.status(200).json(thoughts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
