const express = require('express')
const Mongoose = require('mongoose')
const Bread = require('./models/bread')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const methodOverride = require('method-override')

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(methodOverride("_method"))

// ROUTES
app.get('/', (req, res) => {
    res.send('Bread')
})

// Breads
const breadsController = require('./controllers/breads_controller.js')
const { default: mongoose } = require('mongoose')
app.use('/breads', breadsController)

// 404 Page
app.get('*', (req, res) => {
    res.send('404')
})

// LISTEN
app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`)
})

Mongoose.connect(process.env.MONGO_URI, () => {
    console.log('MongoDB Connected')
})