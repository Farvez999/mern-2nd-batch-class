fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => displyData(data))

function displyData(posts) {
    console.log(posts)

    const postContainer = document.getElementById('post-container');

    for (const post of posts) {
        // console.log(post)

        const postDiv = document.createElement('div')
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h4>User Id : ${post.id}</h4>
        <h5>User Title : ${post.title}</h5>
        <p>User Body : ${post.body}</p>
        `


        postContainer.appendChild(postDiv)
    }
}