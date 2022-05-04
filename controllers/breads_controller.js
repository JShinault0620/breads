const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
    res.render('Index', {
        breads: Bread,
        title: 'The Index'
    })
    //res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
        res.render('Show', {
            bread: Bread[req.params.arrayIndex],
            index: req.params.arrayIndex
        })
    } else {
        res.render('404', {
            title: "Error404",
        })
        console.log(req.params.arrayIndex)
    }
})

// DELETE
breads.delete('/:indexArray', (req, res) => {
    Bread.splice(req.params.indexArray, 1)
    res.status(303).redirect('/breads')
})

module.exports = breads