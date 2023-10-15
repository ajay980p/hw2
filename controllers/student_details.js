const DbConfig = require("../config/db")

const StudentData = async (req, res) => {

    const city = req.params.city;

    DbConfig.query(`SELECT * FROM student_details where city=?`, [city], async (error, result) => {

        try {
            if (error) {
                res.status(500).send(error)
            } else {
                res.status(200).send(result);
            }
        }
        catch (err) {
            res.send(err)
        }
    })
}


const Student_Details = async (req, res) => {

    DbConfig.query(`SELECT * FROM student_details`, async (error, result) => {

        try {
            if (error) {
                res.status(500).send(error)
            } else {
                console.log(result);
                res.status(200).send(result);
            }
        }
        catch (err) {
            res.send(err)
        }
    })
}

module.exports = { StudentData, Student_Details };