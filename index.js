//Server Config
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.set('view_engine', 'pug')
const path = require('path')
app.use('/', express.static(path.join(__dirname, '/')))

//Modules
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'admin',
        database: 'api_project',
        port: 5432
    }
})

knex('roles').then((rows) => console.log(rows))

module.exports = knex

//Routes
app.use(require('./routes/root'))
app.use(require('./routes/api'))

//Server Start
app.listen(port, () => console.log(`Listening on ${port}`))