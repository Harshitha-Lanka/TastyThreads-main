const express = require("express");
const app = express();
const router = require("./routers/route");

// Mount the Router to use the router in your main Express app
app.use("/TastyThreads", router);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server is running at port: ${PORT}`);
});