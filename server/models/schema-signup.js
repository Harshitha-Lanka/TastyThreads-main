const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      validate: {
        validator: function (email) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Basic email validation
        },
        message: "Invalid email format",
      },
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      validate: {
        validator: function (phone) {
          return /^[0-9]{10}$/.test(phone); // 10-digit phone number validation
        },
        message: "Invalid phone number format",
      },
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
  },
  { timestamps: true } // Automatically add `createdAt` and `updatedAt`
);

// JWT generation method
userSchema.methods.generateToken = async function () {
  try {
    const token = jwt.sign(
      { userId: this._id.toString(), email: this.email },
      process.env.JWT_SECRET_KEY, // Ensure JWT_SECRET_KEY is set in .env
      { expiresIn: "30d" } // Set token expiry
    );
    return token;
  } catch (error) {
    console.error("Error generating token:", error.message);
    throw new Error("Could not generate token");
  }
};

module.exports = mongoose.model("User", userSchema);
