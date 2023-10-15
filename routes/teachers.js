const TeachersData = require("../controllers/teachers")
const express = require("express")

const router = express.Router();

router.get("/", TeachersData);

module.exports = router;