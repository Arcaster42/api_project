const express = require('express')
const router = express()
const knex = require('knex')

router.get('/board', (req, res) => {
    knex('posts')
    .then((query) => {
        res.render('board', {posts: query})
    })
    .catch((err) => res.render(err))
})

module.exports = router