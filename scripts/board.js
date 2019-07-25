let posts;
let replies;

;(document.onload = function() {
    fetch('/api/posts')
    .then((res) => {return res.json()})
    .then((data) => {posts = data})

    fetch('/api/replies')
    .then((res) => {return res.json()})
    .then((data) => {replies = data})
    .then(() => {appendPosts()})
})()

function refetch() {
    fetch('/api/posts')
    .then((res) => {return res.json()})
    .then((data) => {posts = data})
    fetch('/api/replies')
    .then((res) => {return res.json()})
    .then((data) => {replies = data})
    .then(() => {appendPosts()})
}

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
        const stamp = document.createElement('p')
        stamp.className = 'stamp'
        stamp.innerText = `${post.time}  ${post.date}`
        const replybutton = document.createElement('input')
        replybutton.className = 'btn'
        replybutton.value = 'Reply'
        replybutton.type = 'button'
        replybutton.onclick = function() {startReply(post.id)}
        const replyzone = document.createElement('p')
        replyzone.className = `replyzone ${post.id}`
        postblock.appendChild(title)
        postblock.appendChild(author)
        postblock.appendChild(stamp)
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
        const stamp = document.createElement('span')
        stamp.className = 'stamp'
        stamp.innerText = `${reply.time}   ${reply.date}`
        const content = document.createElement('p')
        content.className = 'content'
        content.innerText = reply.content
        replyblock.appendChild(author)
        replyblock.appendChild(stamp)
        replyblock.appendChild(content)
        const target = document.getElementsByClassName(reply.parent)[0]
        target.appendChild(replyblock)
    }
}

function startReply(id) {
    closeReply()
    const parentblock = document.getElementsByClassName(id)[1]
    const replyblock = document.createElement('form')
    replyblock.className = 'reply'
    replyblock.id = 'replyform'
    replyblock.setAttribute('method', 'post')
    replyblock.setAttribute('action', '/reply')
    replyblock.setAttribute('enctype', 'multipart/form-data')
    const hiddenparent = document.createElement('input')
    hiddenparent.className = 'reply'
    hiddenparent.type = 'hidden'
    hiddenparent.value = id
    hiddenparent.setAttribute('name', 'parent_hid')
    const hiddenauthor = document.createElement('input')
    hiddenauthor.classname = 'reply'
    hiddenauthor.type = 'hidden'
    hiddenauthor.value = 'FIX ME TO USERNAME'
    hiddenauthor.setAttribute('name', 'author_hid')
    const box = document.createElement('textarea')
    box.className = 'txt reply'
    box.type = 'text'
    box.style.height = '50px'
    box.style.width = '400px'
    box.setAttribute('name', 'content')
    const spacer = document.createElement('br')
    spacer.className = 'reply'
    const submitbutton = document.createElement('input')
    submitbutton.className = 'btn reply'
    submitbutton.value = 'Submit'
    submitbutton.type = 'button'
    submitbutton.onclick = function() {submitReply(id, 'FIX ME', box.value)}
    const cancelbutton = document.createElement('input')
    cancelbutton.className = 'btn reply'
    cancelbutton.value = 'Cancel'
    cancelbutton.type = 'button'
    cancelbutton.onclick = function() {closeReply()}
    replyblock.appendChild(hiddenauthor)
    replyblock.appendChild(hiddenparent)
    replyblock.appendChild(box)
    replyblock.appendChild(spacer)
    replyblock.appendChild(submitbutton)
    replyblock.appendChild(cancelbutton)
    parentblock.append(replyblock)
}

function submitReply(parent, author, content) {
    const form = document.getElementById('replyform')
    form.append('parent', parent)
    form.append('author', author)
    form.submit()
}

function closeReply() {
    const replyelements = document.getElementsByClassName('reply')
    for (let element of replyelements) element.parentNode.removeChild(element)
}

function appendReply(parent, author, content) {
    const replyblock = document.createElement('div')
    replyblock.className = `replyblock ${parent}`
    const authorChild = document.createElement('p')
    authorChild.className = 'author'
    authorChild.innerText = author
    const contentChild = document.createElement('p')
    contentChild.className = 'content'
    contentChild.innerText = content
    replyblock.appendChild(authorChild)
    replyblock.appendChild(contentChild)
    const target = document.getElementsByClassName(parent)[0]
    target.appendChild(replyblock)
}