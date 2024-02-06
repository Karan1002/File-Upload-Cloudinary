const express = require("express");
const app = express();

const path = require("path");
const bodyParser = require("body-parser");
const multer = require("multer");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "public")));

let uploader = multer({
  storage: multer.diskStorage({}),
});

const adminController = require("../controllers/adminController");
app.post("/upload-file", uploader.single("file"), adminController.uploadFile);

module.exports = app;
