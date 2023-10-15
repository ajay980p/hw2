const express = require("express")
const { StudentData, Student_Details } = require("../controllers/student_details")

const router = express.Router();

router.get("/:city", StudentData)

router.get("/", Student_Details);

module.exports = router;