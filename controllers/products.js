const DbConfig = require("../config/db")

const ProductsData = async (req, res) => {

    DbConfig.query('SELECT * FROM products', (error, result) => {
        if (error) {
            console.error('Database query error:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.status(200).json(result);
        }
    });
}


module.exports = ProductsData;