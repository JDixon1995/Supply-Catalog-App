const express = require('express')
const router = express.Router()
const Sale = require('../models/salesModel')


router.get('/', async (req, res) => {
	const sales = await Sale.find()
	res.status(200).json(sales)
})

router.get('/online', async (req, res) => {
	const onlineSales = await Sale.find({ purchaseMethod : "Online" })
	res.status(200).json(onlineSales)
})

router.get('/store', async (req, res) => {
	const storeSales = await Sale.find({ purchaseMethod : "In store" })
	res.status(200).json(storeSales)
})

router.get('/:id', async (req, res) => {
	const sale = await Sale.findById({ _id: req.params.id})
	res.status(200).json(sale)
})


module.exports = router