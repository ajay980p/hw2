const express = require("express")
const router = express.Router();
const StudentsData = require("../controllers/students")

router.get("/", StudentsData);


module.exports = router;