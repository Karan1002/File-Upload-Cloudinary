const fileModel = require("../models/fileModel");
const fileUpload = require("../config/uploadConfig");

const uploadFile = async (req, res) => {
  try {
    const uploadData = await fileUpload.uploadFileConfig(req.file.path);
    // console.log(uploadData);
    let fileData = new fileModel({
      file_url: uploadData.secure_url,
    });
    let result = await fileData.save();
    res.send({ succes: true, msg: "file uploaded successfully", data: result });
  } catch (error) {
    res.send({ succes: false, msg: error.message });
  }
};

module.exports = { uploadFile };
