const Sale = require('../models/salesModel')

// Get all sales
const getSales = async (req, res) => {
	const sales = await Sale.find()
	res.json(sales)
}

module.exports = {
	getSales
}