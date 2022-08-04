const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

// Add
router.route("/adduser").post(userController.addUser);

module.exports = router;
