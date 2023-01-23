
//what is callback function in javascript
// setTimeout(function() {
//     console.log('Timer');
// },2000);
// function x(y) {
//     console.log('x');
//     y();
// }
// x(function y() {
//     console.log('y');
// })
//javascript is synchronous and single threaded language
//JS is a single threaded which means only one statement is executed at a time.
// Single threaded means it has only one call stack. 
//Blocking the main thread

//Power of callbacks

//Deep about EventListener
// let count = 0;
// document.getElementById('clickme')
// .addEventListener('click', function xyz() {
//     console.log('Button is clicked',++count)
// })
// Closures Demo with Event Listeners
// function attachEventListener() {
//     let count = 0;
//     document.getElementById('clickme')
//     .addEventListener('click', function DOMContentLoaded() {
//         console.log('DOM is loaded',++count)
//     })
// }
// attachEventListener();
//Scope Demo with Event Listeners

//Garbage Collection and removeEventListeners


// 1)
// setTimeout(() => console.log('timer expired'), 1000)

// function x(y) {
// console.log('inside x');
// y();
// }

// x(function y(){
// console.log('inside y')
// })

// 2)
// setTimeout(() => console.log('timer1 expired'), 1000)
// setTimeout(() => console.log('timer2 expired'), 0)

// function x(y) {
// console.log('inside x');
// y();
// }

// x(function y(){
// console.log('inside y')

// })

// 3)
// setTimeout(() => console.log('timer1 expired'), 1000)
// setTimeout(() => console.log('timer2 expired'), 0)

// function x(y) {
// console.log('inside x');
// y();
// }

// x(function y(){
// setTimeout(() => console.log('inside y'), 0)
// })


