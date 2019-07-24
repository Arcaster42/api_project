const moment = require('moment')
const knex = require('../index')
const db = knex.knex

let posts;
fetch('/api/posts')
.then((res) => {return res.json()})
.then((data) => {posts = data})

let replies;
fetch('/api/replies')
.then((res) => {return res.json()})
.then((data) => {replies = data})
.then(() => {appendPosts()})

function appendPosts() {
    const postdiv = document.getElementById('postdiv')
    for (const post of posts) {
        const postblock = document.createElement('div')
        postblock.className = `postblock ${post.id}`
        const title = document.createElement('h3')
        title.className = 'title'
        title.innerText = post.title
        const author = document.createElement('p')
        author.className = 'author'
        author.innerText = post.author
        const content = document.createElement('p')
        content.className = 'content'
        content.innerText = post.content
        const replybutton = document.createElement('input')
        replybutton.className = 'btn'
        replybutton.value = 'Reply'
        replybutton.type = 'button'
        replybutton.onclick = function() {startReply(post.id)}
        const replyzone = document.createElement('p')
        replyzone.className = `replyzone ${post.id}`
        postblock.appendChild(title)
        postblock.appendChild(author)
        postblock.appendChild(content)
        postblock.appendChild(replybutton)
        postblock.appendChild(replyzone)
        postdiv.appendChild(postblock)
    }
    appendReplies()
}

function appendReplies() {
    for (const reply of replies) {
        const replyblock = document.createElement('div')
        replyblock.className = `replyblock ${reply.parent}`
        const author = document.createElement('p')
        author.className = 'author'
        author.innerText = reply.author
        const content = document.createElement('p')
        content.className = 'content'
        content.innerText = reply.content
        replyblock.appendChild(author)
        replyblock.appendChild(content)
        const target = document.getElementsByClassName(reply.parent)[0]
        target.appendChild(replyblock)
    }
}

function startReply(id) {
    closeReply()
    const parentblock = document.getElementsByClassName(id)[1]
    const replyblock = document.createElement('div')
    replyblock.className = 'reply'
    const box = document.createElement('textarea')
    box.className = 'txt reply'
    box.type = 'text'
    box.style.height = '50px'
    box.style.width = '400px'
    const spacer = document.createElement('br')
    spacer.className = 'reply'
    const submitbutton = document.createElement('input')
    submitbutton.className = 'btn reply'
    submitbutton.value = 'Submit'
    submitbutton.type = 'button'
    submitbutton.onclick = function() {submitReply(id, box.value)}
    const cancelbutton = document.createElement('input')
    cancelbutton.className = 'btn reply'
    cancelbutton.value = 'Cancel'
    cancelbutton.type = 'button'
    cancelbutton.onclick = function() {closeReply()}
    replyblock.appendChild(box)
    replyblock.appendChild(spacer)
    replyblock.appendChild(submitbutton)
    replyblock.appendChild(cancelbutton)
    parentblock.append(replyblock)
}

function submitReply(parent, author, content) {
    const time = moment()
    db('replies')
    .insert({
        parent: parent,
        author: author,
        content: content,
        time: time})
}

function closeReply() {
    const replyelements = document.getElementsByClassName('reply')
    for (let element of replyelements) element.parentNode.removeChild(element)
}