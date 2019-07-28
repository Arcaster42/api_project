const express = require('express')
const router = express()
const multer = require('multer')
const upload = multer()
const knex = require('../index')
const db = knex.knex
const moment = require('moment')

router.post('/post', upload.none(), (req, res) => {
    const author = req.session.user
    const topic = req.body.topic
    const title = req.body.title
    const content = req.body.content
    const date = moment().format('YYYY-MM-DD')
    const time = moment().format('HH:MM A')
    db('posts')
    .insert({
        author: author,
        topic: topic,
        title: title,
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