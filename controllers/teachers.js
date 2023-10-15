const DbConfig = require("../config/db")

const TeachersData = async (req, res) => {

    DbConfig.query("SELECT * FROM teachers", (error, result) => {
        if (error) {
            res.status(500).send(error);
        } else {
            res.status(200).send(result);
        }
    })
}

module.exports = TeachersData;