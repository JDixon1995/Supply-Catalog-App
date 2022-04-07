const mongoose = require('mongoose')

const salesSchema = new mongoose.Schema({
	saleDate: {
		type: String,
		required: true,
	},
	items: {
		type: Array
	},
	storeLocation: {
		type: String,
		required: true,
	},
	customer: {
		type: Object,
		required: true,
	},
	couponUse: {
		type: Boolean,
		required: true,
	},
	purchaseMethod: {
		type: String,
		required: true,
	},
},
	{collection: 'sales'}
)

module.exports = mongoose.model('Sale', salesSchema)