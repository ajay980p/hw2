const express = require('express');
const DbConfig = require('./config/db');
const Products = require("./routes/products")
const Students = require("./routes/students")
const Teachers = require("./routes/teachers")
const Student_Details = require("./routes/student_details")
const app = express();
const cors = require('cors')

app.use(cors());

app.use("/products", Products);

app.use("/students", Students);

app.use("/teachers", Teachers);

app.use("/student_details/", Student_Details)



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
