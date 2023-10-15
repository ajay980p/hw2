const DbConfig = require("../config/db")

const StudentsData = async (req, res) => {

    DbConfig.query("SELECT * FROM students", async (error, result) => {

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

module.exports = StudentsData;