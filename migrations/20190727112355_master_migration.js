let knex = require('../index')
let db = knex.knex

exports.up = function(knex, Promise) {
    return createUsersTable()
    .then(createApiKeysTable)
    .then(createTopicsTable)
    .then(createPostsTable)
    .then(createRepliesTable)

    function createUsersTable() {
        return db.schema.createTable('users', (t) => {
            t.string('username').primary()
            t.string('email').notNullable()
            t.string('pw_hash').notNullable()
            t.text('api_key').nullable()
            t.boolean('can_put'),
            t.boolean('can_patch'),
            t.boolean('can_delete')
        })
    }

    function createApiKeysTable() {
        return db.schema.createTable('api_keys', (t) => {
            t.string('api_key').primary()
            t.boolean('is_admin')
        })
    }

    function createTopicsTable() {
        return db.schema.createTable('topics', (t) => {
            t.string('topic').primary()
        })
    }

    function createPostsTable() {
        return db.schema.createTable('posts', (t) => {
            t.increments('id').primary()
            t.string('author').references('users.username')
            t.string('topic').references('topics.topic')
            t.string('title').notNullable()
            t.text('content').notNullable()
            t.string('date_stamp')
            t.string('time_stamp')
        })
    }

    function createRepliesTable() {
        return db.schema.createTable('replies', (t) => {
            t.increments('id').primary()
            t.integer('parent').references('posts.id')
            t.string('author').references('users.username')
            t.text('content').notNullable()
            t.string('date_stamp')
            t.string('time_stamp')
        })
    }
};

exports.down = function(knex, Promise) {
    return db.schema.dropTable('users')
    .then(db.schema.dropTable('api_keys'))
    .then(db.schema.dropTable('topics'))
    .then(db.schema.dropTable('posts'))
    .then(db.schema.dropTable('replies'))
};
