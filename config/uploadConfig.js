// const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// cloudinary.config({
//   // cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   // api_key: process.env.CLOUDINARY_API_KEY,
//   // api_secret: process.env.CLOUDINARY_API_SECRET,
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

const cloudinary = require("cloudinary");

cloudinary.v2.config({
  cloud_name: "damq4ghel",
  api_key: "366593616415934",
  api_secret: "9DBxZEXzZqTk2saZCKvIozCQGV8",
  secure: true,
});

const uploadFileConfig = async (filePath) => {
  console.log(filePath);
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "raw",
    });
    console.log(result);
    return result;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { uploadFileConfig };
