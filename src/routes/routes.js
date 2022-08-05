const express = require("express");
const router = express.Router();

const appController = require("../controllers/app.controller");

router
  .get("/", appController.GET)
  .post("/", appController.POST)
  .get("/email", appController.EMAIL);

module.exports = router;
