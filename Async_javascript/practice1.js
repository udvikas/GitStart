console.log('a');
console.log('b');
new Promise((res, rej) => {
    setTimeout(() => res('c'), 1000);
}).then(data => {
    console.log(data)
    new Promise((res, rej) => {
        setTimeout(() => res('d'), 1000)
    }).then(data => {
        console.log(data)
        new Promise((res, rej) => {
            setTimeout(() => res('e'), 1000)
        }).then(data => {
            console.log(data);
        })
    })
    
    
});



