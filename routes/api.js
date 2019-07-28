const express = require('express')
const router = express()
const knex = require('../index.js')
const db = knex.knex
const keys = require('../api_keys')
const moment = require('moment')

router.get('/api/posts', (req, res) => {
    db('posts')
    .then((results) => {
        let result = JSON.stringify(results)
        res.send(result)
    })
})

router.post('/api/posts', (req, res) => {
    const api = req.query.apikey
    if (!api) res.sendStatus(401)
    else
    db('users')
    .where({ api_key: api })
    .select('username', 'can_put')
    .then((query) => {
        if (query.length < 1) res.sendStatus(401)
        else {
            const can_put = query[0].can_put
            const author = query[0].username
            if (!can_put) res.sendStatus(401)
            else if (req.body.length > 1) res.sendStatus(400)
            else {
                const post = req.body[0]
                const topic = post.topic
                const title = post.title
                const content = post.content
                const date = moment().format('YYYY-MM-DD')
                const time = moment().format('HH:MM A')
                if (!title || !content || !topic) res.sendStatus(400)
                else
                db('posts')
                .insert({
                    author: author,
                    topic: topic,
                    title: title,
                    content: content,
                    date_stamp: date,
                    time_stamp: time})
                .then(() => res.sendStatus(200))
                .catch((err) => res.send(err))
            }
        }
    })
})

router.put('/api/posts', (req, res) => {
    const api = req.query.apikey
    if (!api) res.sendStatus(401)
    else
    db('users')
    .where({ api_key: api })
    .select('username', 'can_put')
    .then((query) => {
        if (query.length < 1) res.sendStatus(401)
        else {
            const can_put = query[0].can_put
            const author = query[0].username
            if (!can_put) res.sendStatus(401)
            else if (req.body.length > 1) res.sendStatus(400)
            else {
                const post = req.body[0]
                const id = post.id
                const topic = post.topic
                const title = post.title
                const content = post.content
                const date = moment().format('YYYY-MM-DD')
                const time = moment().format('HH:MM A')
                if (!id) res.sendStatus(400)
                else if (post.author !== author) res.sendStatus(401)
                else
                db('posts')
                .where({ id: id })
                .then((query) => {
                    if (query.length < 1) res.sendStatus(400)
                    else {
                        db('posts')
                        .where({ id: id })
                        .update({
                            topic: topic,
                            title: title,
                            content: content
                        })
                    }
                })
                .then(() => res.sendStatus(200))
                .catch((err) => res.send(err))
            }
        }
    })
})

router.delete('/api/posts', (req, res) => {
    const api = req.query.apikey
    if (!api) res.sendStatus(401)
    else
    db('users')
    .where({ api_key: api })
    .select('username', 'can_delete')
    .then((query) => {
        if (query.length < 1) res.sendStatus(401)
        else {
            const can_delete = query[0].can_delete
            const author = query[0].username
            console.log(can_delete)
            if (!can_delete) res.sendStatus(401)
            else if (req.body.length > 1) res.sendStatus(400)
            else {
                const post = req.body[0]
                const id = post.id
                console.log(post)
                console.log(post.author)
                db('posts')
                .where({ id: id })
                .select('author')
                .then((query) => {
                    post.author = query[0].author
                    if (!id) res.sendStatus(400)
                    else if (post.author !== author) res.sendStatus(401)
                    else
                    db('posts')
                    .where({ id: id })
                    .del()
                    .then(() => res.sendStatus(200))
                    .catch((err) => res.send(err))
                })
            }
        }
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

router.post('/api/replies', (req, res) => {
    const api = req.query.apikey
    if (!api) res.sendStatus(401)
    else
    db('users')
    .where({ api_key: api })
    .select('username', 'can_put')
    .then((query) => {
        if (query.length < 1) res.sendStatus(401)
        else {
            const can_put = query[0].can_put
            const author = query[0].username
            if (!can_put) res.sendStatus(401)
            else if (req.body.length > 1) res.sendStatus(400)
            else {
                const reply = req.body[0]
                const parent = reply.parent
                const content = reply.content
                const date = moment().format('YYYY-MM-DD')
                const time = moment().format('HH:MM A')
                if (!parent || !content) res.sendStatus(400)
                else
                db('replies')
                .insert({
                    parent: parent,
                    author: author,
                    content: content,
                    date_stamp: date,
                    time_stamp: time})
                .then(() => res.sendStatus(200))
                .catch((err) => res.send(err))
            }
        }
    })
})

router.put('/api/replies', (req, res) => {
    const api = req.query.apikey
    if (!api) res.sendStatus(401)
    else
    db('users')
    .where({ api_key: api })
    .select('username', 'can_put')
    .then((query) => {
        if (query.length < 1) res.sendStatus(401)
        else {
            const can_put = query[0].can_put
            const author = query[0].username
            if (!can_put) res.sendStatus(401)
            else if (req.body.length > 1) res.sendStatus(400)
            else {
                const reply = req.body[0]
                const id = reply.id
                const content = reply.content
                if (!id) res.sendStatus(400)
                else if (reply.author !== author) res.sendStatus(401)
                else
                db('replies')
                .where({ id: id })
                .then((query) => {
                    if (query.length < 1) res.sendStatus(400)
                    else {
                        db('replies')
                        .where({ id: id })
                        .update({
                            content: content
                        })
                    }
                })
                .then(() => res.sendStatus(200))
                .catch((err) => res.send(err))
            }
        }
    })
})

router.delete('/api/replies', (req, res) => {
    const api = req.query.apikey
    if (!api) res.sendStatus(401)
    else
    db('users')
    .where({ api_key: api })
    .select('username', 'can_delete')
    .then((query) => {
        if (query.length < 1) res.sendStatus(401)
        else {
            const can_delete = query[0].can_delete
            const author = query[0].username
            if (!can_delete) res.sendStatus(401)
            else if (req.body.length > 1) res.sendStatus(400)
            else {
                const reply = req.body[0]
                const id = reply.id
                if (!id) res.sendStatus(400)
                else
                db('replies')
                .where({ id: id })
                .select('author')
                .then((query) => {
                    reply.author = query[0].author
                    if (reply.author !== author) res.sendStatus(401)
                    else
                    db('replies')
                    .where({ id: id })
                    .del()
                    .then(() => res.sendStatus(200))
                    .catch((err) => res.send(err))
                })
            }
        }
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