const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./dbConfig/db')
const port = process.env.PORT || 5000

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/api/sales', require('./routes/saleRoutes'))

app.listen(port, () => {
	console.log(`Server started on port ${port}`)
})