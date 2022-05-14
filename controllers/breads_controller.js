const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
    Bread.find()
        .then((foundBreads) => {
            res.render('index', {
                breads: foundBreads,
                title: 'Index Page'
            })
        })
    //res.send(Bread)
})

// SHOW
breads.get('/:id', (req, res) => {
    Bread.findById(req.params.id)
        .then((foundBread) => {
            if (foundBread) {
                console.log(foundBread)
                res.render('Show', {
                    bread: foundBread
                })
            } else {
                res.render('404', {
                    title: "Error404",
                })
            }
        })
})

// PUT
breads.put('/:id', (req, res) => {
    console.log(req.body)
    if(req.body.hasGluten === 'on') {
        req.body.hasGluten = true
    } else {
        req.body.hasGluten = false
    }
    Bread.findByIdAndUpdate(req.params.id, req.body, { new: true})
        .then(updatedBread => {
            console.log(updatedBread)
            res.redirect(`/breads/${req.params.id}`)
        })
})

// POST
breads.post('/', (req, res) => {
    let newBread = new Bread(req.body)
    newBread.save((err) => {
        if (err) {

        } else {
            res.redirect('/breads')
        }
    })
})

// EDIT
breads.get('/:id/edit', (req, res) => {
    Bread.findById(req.params.id)
        .then(foundBread => {
            res.render('edit', {
                bread: foundBread
            })
        })
})

// DELETE
breads.delete('/:id', (req, res) => {
    console.log(req.params.id)
    Bread.findByIdAndDelete(req.params.id, () => {
        console.log(`Bread ${req.params.id} deleted.`)
    })
    res.redirect('/breads')
})

module.exports = breads