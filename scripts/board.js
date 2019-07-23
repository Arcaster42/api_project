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
        postblock.appendChild(title)
        postblock.appendChild(author)
        postblock.appendChild(content)
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