// console.log('Message no. 1: Sync');
// setTimeout(function() {
//    console.log('Message no. 2: setTimeout');
// }, 0);
// var promise = new Promise(function(resolve, reject) {
//    resolve();
// });
// promise.then(function(resolve) {
//    console.log('Message no. 3: 1st Promise');
// })
// .then(function(resolve) {
//    console.log('Message no. 4: 2nd Promise');
// });
// console.log('Message no. 5: Sync');

// setTimeout(function() {
//     console.log('Message 1')
//  }, 0);
//  console.log('Message 2');

// let obj = {
//     key1: 'ram',
//     key2: 'shyam',
//     key3: 'mohan'
// };
// let keyArr = Object.keys(obj);

// keyArr.forEach(key => {
//     console.log(obj[key]);
// })

// console.log('a');

// console.log('b');

// setTimeout(() => console.log('c'), 0)

// console.log('d')

// 3)

// console.log('a');
// console.log('b');
// setTimeout(() => console.log('e'), 1000)
// setTimeout(() => console.log('c'), 0)
// console.log('d')

// let obj1 = {
//     key1: 'value1',
//     key2: 'value2'
// };
// let obj2 = obj1;
// obj2.key1 = 'value100';

// console.log(obj1);

// let obj1 = {
//     key1: 'value1',
//     key2: 'value2'
// };
// // let obj2 = {...obj1}; // obj2 has a reference of obj1
// let obj2 = {...obj1, key1: 'value100', key3: 'value200'}
// // obj2.key1 = 'value100';

// console.log(obj2);

// let arr1 = [1, 2];
// let arr2 = [3, 4];

// let arr3 = [...arr1, ...arr2];
// console.log(arr3);

// let arr1 = [ {a:1}, {b:2}, {c:3}];
// let arr2 = [3, 4];

// let obj = {d:4}
// let arr3 = [...arr1, ...arr2, {...obj}];
// console.log(arr3);

let studentobj = {
	'yash': 26,
	'vaibhav': 24,
	'rajesh' : 25,
	}
    
function findaverageAge(studentObj){

    let studentArr = Object.keys(studentobj);
    let sum = 0;
    let count = 0;
    let sumofAge = studentArr.forEach((key) => {
        sum = sum + studentobj[key];
        count++;
    })
   let averageAge = sum/count;
   console.log('Average age is', averageAge);
}
findaverageAge(studentobj);
