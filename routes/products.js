const express = require("express");
const router = express.Router();

const ProductsData = require("../controllers/products")

router.get("/", ProductsData);


module.exports = router;