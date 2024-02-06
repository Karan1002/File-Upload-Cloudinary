require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");

var adminRoute = require("./routes/adminRoute");

app.use("/api", adminRoute);


app.listen(5000, async () => {
  try {
    await connectDB(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
});
