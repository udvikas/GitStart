
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];


function getPosts() {
    
    setTimeout(() => {
        let output = ''
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output;
    },1000);
}

function createPost(post) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error) {
                resolve();
            } else {
                reject('Error: Something went wrong');
            }
        }, 1000)
    })
}

const user = {
    userName: 'vikas',
    lastActivityTime: new Date().getTime()
}
function updateLastActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            user.lastActivityTime = new Date().getTime();
                resolve(user.lastActivityTime)
             
        }, 1000)
    }) 
}

// function deletePost() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//            if(posts.length > 0) {
//             resolve(posts.pop());
//            } else {
//             reject('Array is empty now.')
//            }
//         }, 1000)
//     })
// }

createPost({title: 'Post Three', body: 'this is post three'})
.then(getPosts).catch(err => console.log(err))
createPost({title: 'Post Three', body: 'this is post three'})
.then(() => {
    getPosts();
    deletePost().then(() => {
        getPosts();
        deletePost().then(() => {
            getPosts();
            deletePost().then(() => {
                getPosts();
                deletePost().then(() => {})
                .catch((err) => {
                    console.log('Inside catch block', err)
                })
            })
        })
    }).catch(() => {})
}).catch(() => {})

//Promise.all

function userUpdatepost() {
    Promise.all([createPost({title: 'Post Three', body: 'this is post three'}), updateLastActivityTime()])
    .then(([createPostresolves, updateLastActivityTimeresolve]) => {
        console.log(updateLastActivityTimeresolve)
    }).catch(err => console.log(err))
}
userUpdatepost();
