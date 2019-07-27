const express = require('express')
const router = express()
const multer = require('multer')
const upload = multer()
const knex = require('../index')
const db = knex.knex
const moment = require('moment')

router.post('/reply', upload.none(), (req, res) => {
    const parent = req.body.parent_hid
    const author = req.session.user
    const content = req.body.content
    const date = moment().format('YYYY-MM-DD')
    const time = moment().format('HH:MM A')
    db('replies')
    .insert({
        parent: parent,
        author: author,
        content: content,
        date_stamp: date,
        time_stamp: time})
    .then(() => {
        console.log('inserted into DB')
    })
    .then(() => res.redirect('/board'))
    .catch((err) => res.send(err))
})

module.exports = router