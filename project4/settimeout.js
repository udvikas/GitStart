
// console.log('a');
// console.log('b');

// setTimeout(() => console.log('c'), 1000);
// console.log('d');

// console.log('a');
// console.log('b');

// setTimeout(()=> console.log('c'), 1000);
// setTimeout(()=> console.log('c'), 0);

// console.log('d');

// console.log(a); //- undefined
// var a = 10;   

// console.log(b); -cannot access b before initialization (ref error)
// let b = 100;

// console.log(a);  //- cannot access a before initialization
// const a = 20;

// const PI = 3.14;
// console.log(PI); 

// const sumOftwoNumbers = (a, b) => {
//                 return a + b;   
// }
// const res = sumOftwoNumbers(5, 7);
// console.log(res);

// let sum = (a, b) => a + b;
// console.log(sum(10, 20)); // Output 30

// let calculateArea = function(height = 100, width = 50) {  
//     console.log('Area ', height*width);
// };
// calculateArea(10,5);

// var calculateArea = function(height, width) {  
//     height =  height || 50;
//     width = width || 80;
//     // logic
//     console.log('Area is', height * width);
//  }
//  calculateArea();

//Array Destructuring
// let fruits = ["Apple", "Banana"];
// let [a, b] = fruits; // Array destructuring assignment
// console.log(a, b);

// //Object Destructuring
// let person = {name: "Peter", age: 28};
// let {name, age} = person; // Object destructuring assignment
// console.log(name, age);

// function getMobile(manufacturer, model, year) {
//     return {
//        manufacturer,
//        model,
//        year
//     }
//  }
//  const res = getMobile("Samsung", "Galaxy", "2020");
//  console.log(res);

//  var asyncCall =  new Promise((resolve, reject) => {
//     // do something
//     resolve();
//  }).then(()=> {   
//     console.log('DON!');
//  })

// export var num = 50; 
// export function getName(fullName) {   
//    //data
// };

// import {num, getName} from 'module';
// console.log(num); // 50

let arr = [3, 4, 5, 6];

let modifiedArray = arr.map(function(element){
    return element*3;
});

console.log(modifiedArray);