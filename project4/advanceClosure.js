
// function x() {
    
//     for (var i=1; i <= 5; i++) {
//         function close(x) {
//             setTimeout(function() {
//                 console.log(x);
//             }, x*1000);
//         }
//         close(i);
// }
    
//     console.log('Namaste JavaScript');
// }
// x();

// 1)

// function y(){
// // let a = 1;
// setTimeout(() => console.log(a), 1000)
// console.log('Done Coding')
// }

// y();

// 2)
// function y(){

//     setTimeout(() => console.log(a), 0)
//     console.log('Done Coding')
    
//     }
//     y();

// 3)
// function y(){

//     for(var i=1;i<6;i++){
//     setTimeout(() => console.log(i ), i * 1000)
//     }
//     console.log('Done Coding')
    
//     }
//     y();

// 5)
// var count = 0;
const fun = (arr) => {
    var count = 0; //hear closures came
    return () => {
        console.log('Hello', arr[count]);
        count++;
    }
}
const name = fun(['ram', 'shyam']);
name();
name();