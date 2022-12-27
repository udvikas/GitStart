const posts = [
    {title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()},
    {title: 'Post Two', body: 'This is post two', createdAt: new Date().getTime()}
];

let intervalID = 0;
function getPosts() {
    clearInterval(intervalID)
    intervalID = setInterval(() => {
        let output = ''
        posts.forEach((post, index) => {
            output += `<li>${post.title} - last updated ${(new Date().getTime() - post.createdAt) / 1000} seconds ago</li>`
        });
       console.log('running time is', intervalID)
        document.body.innerHTML = output;
    },1000);
}

function createPost(post, callback) {
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime()});
        callback();
    }, 2000)
}

function create4thPost(post, callback) {
    setTimeout(() => {
        posts.push({...post, createdAt: new Date().getTime()});
        callback();
    }, 2000)
}
getPosts();
createPost({title: 'Post Three', body: 'This is post three'}, getPosts);
create4thPost({title: 'Post Four', body: 'This is post four'}, getPosts);