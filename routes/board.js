const express = require('express')
const router = express()
const knex = require('../index')
const db = knex.knex

router.get('/board', (req, res) => {
    let posts;
    let replies;
    db('posts')
    .then((query) => {
        posts = query
        db('replies')
        .then((query) => {
            replies = query
        })
        .then(() => {
            res.render('board', {posts: posts, replies: replies})
        })
        .catch((err) => res.render(err))
    })
    .catch((err) => res.render(err))
})

module.exports = router