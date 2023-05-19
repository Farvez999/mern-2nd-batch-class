// const URL = 'https://jsonplaceholder.typicode.com/todos/1'

// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => console.log(data))

function loadData() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displyData(data))
}

function displyData(users) {
    // console.log(users)

    for (const user of users) {
        console.log(user)

        const ul = document.getElementById('user-list')

        const li = document.createElement('li');
        const li2 = document.createElement('li')

        li.innerText = user.name;
        li2.innerText = user.email;

        ul.appendChild(li)
        ul.appendChild(li2)
    }
}