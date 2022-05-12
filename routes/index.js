var express = require('express');
var router = express.Router();

// import controllers
const testController = require("../controllers/testController");

// Test route
router.get("/test", testController.test);

module.exports = router;