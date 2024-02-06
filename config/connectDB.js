const mongoose = require("mongoose");

const connectDB = async (url) => {
  try {
    const conn = await mongoose.connect(url);
    console.log(`Connect sucessful`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
