fetch('/api/posts')
.then((res) => {return res.json()})
.then((data) => console.log(data))
function appendPosts() {
    const postdiv = document.getElementById('postdiv')

}