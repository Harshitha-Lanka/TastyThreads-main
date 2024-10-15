require("dotenv").config(); // Load environment variables
const express = require("express");
const app = express();
const router = require("./routers/route");
const connectDb = require("./config/db");

app.use(express.json());

// Mount the Router to use the router in your main Express app
app.use("/TastyThreads", router);

const PORT = 5000;

// Connect to the database first, then start the server
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at port: ${PORT}`);
  });
}).catch((error) => {
  console.error("Database connection failed", error);
  process.exit(1); // Exit the process with an error
});
