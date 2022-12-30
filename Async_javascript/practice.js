
// async function dadMakesPromise() {
//     const a = 1;
//     const dadPromise = await new Promise((resolve, reject) => {
    
//         setTimeout(() => {
    
//             let salaryCredit = true;
//             let salary = 30000;
//             let costOfPS5 = 40000;
//             let costOfPS4 = 30000;
    
//             if(salaryCredit == true && salary > costOfPS5) {
//                 resolve('buy him a ps5')
//             } else if(salaryCredit == true && salary > costOfPS4) {
//                 resolve('buy him a ps4')
//             } else {
//                 reject('sorry! i will buy you a next month')
//             }
//         }, 1000)
       
//     })
//     console.log(dadPromise);
// }
// dadMakesPromise();




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

async function createPost(post) {

    const createPostlocal = await new Promise((resolve, reject) => {
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
    console.log(createPostlocal)
}
createPost();

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

async function deletePost() {
    const deletePostlocal = await new Promise((resolve, reject) => {
        setTimeout(() => {
           if(posts.length > 0) {
            resolve(posts.pop());
           } else {
            reject('Array is empty now.')
           }
        }, 1000)
    })
    console.log(deletePostlocal)
}
deletePost();
// createPost({title: 'Post Three', body: 'this is post three'})
// .then(getPosts).catch(err => console.log(err))
// createPost({title: 'Post Three', body: 'this is post three'})
// .then(() => {
//     getPosts();
//     deletePost().then(() => {
//         getPosts();
//         deletePost().then(() => {
//             getPosts();
//             deletePost().then(() => {
//                 getPosts();
//                 deletePost().then(() => {})
//                 .catch((err) => {
//                     console.log('Inside catch block', err)
//                 })
//             })
//         })
//     }).catch(() => {})
// }).catch(() => {})

//Promise.all

function userUpdatepost() {
    Promise.all([createPost({title: 'Post Three', body: 'this is post three'}), updateLastActivityTime()])
    .then(([createPostresolves, updateLastActivityTimeresolve]) => {
        console.log(updateLastActivityTimeresolve)
    }).catch(err => console.log(err))
}
userUpdatepost();
