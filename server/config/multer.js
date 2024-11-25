const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Path where the files will be uploaded
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Unique file name
  }
});

const upload = multer({ storage: storage });

module.exports = upload;  // Export the configured upload instance
