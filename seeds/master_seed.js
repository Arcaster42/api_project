const knex = require('../index')
const db = knex.knex

exports.seed = function(knex) {
  return db('users').del()
    .then(() => {
      return db('users').insert([
        {username: 'admin42', email: 'admin42@gmail.com', pw_hash: 'na', api_key: 'abcdefg123'},
        {username: 'jsdev14', email: 'jsdev14@gmail.com', pw_hash: 'na'},
        {username: 'supercat7', email: 'supercat7@gmail.com', pw_hash: 'na'},
        {username: 'randomcoder9', email: 'randomcoder9@gmail.com', pw_hash: 'na'},
        {username: 'danishbagel21', email: 'danishbagel21@gmail.com', pw_hash: 'na'}
      ])
    })
    .then(() => {
      return db('topics').insert([
        {topic: 'Variables'},
        {topic: 'Functions'},
        {topic: 'HTML/CSS'},
        {topic: 'Node/Express'},
        {topic: 'Database'},
        {topic: 'API'}
      ])
    })
    .then(() => {
      return db('posts').insert([
        {author: 'jsdev14', topic: 'Node/Express', title: 'Setting up Express', 
        content: 'Does anyone know how to set up an express server in node?', 
        date_stamp: '2019-07-22', time_stamp: '8:25 AM'},
        {author: 'supercat7', topic: 'HTML/CSS', title: 'CSS is Impossible', 
        content: 'Why is CSS imposibble? You need like five different lines of code just to center something. What a joke!', 
        date_stamp: '2019-07-22', time_stamp: '9:45 PM'},
        {author: 'randomcoder9', topic: 'Variables', title: 'Why Boolean?', 
        content: 'Seriously, why is it called a boolean?', 
        date_stamp: '2019-07-23', time_stamp: '7:32 AM'}
      ])
    })
    .then(() => {
      return db('replies').insert()
    })
};
