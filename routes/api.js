const express = require('express')
const router = express()
const knex = require('../index.js')
const db = knex.knex
const keys = require('../api_keys')

router.get('/api/posts', (req, res) => {
    db('posts')
    .then((results) => {
        let result = JSON.stringify(results)
        res.send(result)
    })
})

router.get('/api/posts/:author', (req, res) => {
    db('posts')
    .where({author: req.params.author})
    .then((results) => {
        let result = JSON.stringify(results.reverse())
        res.send(result)
    })
})

router.get('/api/replies', (req, res) => {
    db('replies')
    .then((results) => {
        let result = JSON.stringify(results)
        res.send(result)
    })
})

router.get('/api/replies/:author', (req, res) => {
    db('replies')
    .where({author: req.params.author})
    .then((results) => {
        let result = JSON.stringify(results)
        res.send(result)
    })
})

router.get('/api/content/:author', (req, res) => {
    let posts
    let replies
    db('posts')
    .where({author: req.params.author})
    .then((results) => {
        posts = JSON.stringify(results)
    })
    .then(() => {
        db('replies')
        .where({author: req.params.author})
        .then((results) => {
            replies = JSON.stringify(results)
            res.send(posts + replies)
        })
    })
})

router.get('/api/topics/', (req, res) => {
    db('topics')
    .then((results) => {
        let result = JSON.stringify(results)
        res.send(result)
    })
})

router.get('/api/topics/:name', (req, res) => {
    db('topics')
    .where({topic: req.params.name})
    .then((results) => {
        let result = JSON.stringify(results)
        res.send(result)
    })
})

router.get('/api/users', (req, res) => {
    let admin = false
    for (const key of keys.adminKeys) {
        if (key === req.query.apikey) admin = true
    }
    if (admin) {
        db('users')
        .select('username', 'email')
        .then((results) => {
            let result = JSON.stringify(results)
            res.send(result)
        })
    } else
    db('users')
    .select('username')
    .then((results) => {
        let result = JSON.stringify(results)
        res.send(result)
    })
})

module.exports = router