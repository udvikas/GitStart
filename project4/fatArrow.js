// 'use strict';

// var getA = function(a) {
//     return a;
// };

// let getA = a => a;
// console.log(getA(1));

// // let squares = a => a*a; 

// let square = (a) => {return a * a}; // More reasonable syntex
// console.log(square(3));

// let a = 4;
// let square1 = () => {return a * a};
// console.log(square1());

// let multy = (a, b) => {return a * b};
// console.log(multy(3,9));

// let x = function() {
//     this.val = 1;
//     setTimeout(function(){
//         this.val++;
//         console.log(this.val);
//     }, 1)
// }

// const xx = new x()
// fat arraow does not have its own 'this'
// let x = function() {
//     let that = this;
//     this.val = 1;
//     setTimeout(function(){
//         that.val++;
//         console.log(that.val);
//     }, 1)
// }
// const xx = new x()

// let x = function() {
    
//     this.val = 1;
//     setTimeout(() => {
//         this.val++;
//         console.log(this.val);
//     }, 1)
// }
// const xx = new x()

// var x = function() {
//     console.log(arguments[2]);
// }
// x(1,2,3);

// // spread operator
// var x = (...n) => {
//     console.log(n[0]);
// }
// x(1,2,3);

// class student {
//     constructor(name, age, boardmarks) {
//         this.name = name;
//         this.age = age;
//         this.boardmarks = boardmarks;
//     }
//     MinPlacementAge(MinAge) {
//         return function eligibleforcompany(MinMarks) {
//             if(this.boardmarks > MinMarks && this.age > MinAge) {
//                 console.log(`${this.name} is eligible for placement`)
//             } else {
//                 console.log(`${this.name} is not eligible for placement`)
//             }
//         }
//     }
// }
// const student1 = new student('james',29,54);
// student1.MinPlacementAge(18)(35);   

// here arrow fucntion comes into picture.
// class student {
//     constructor(name, age, boardmarks) {
//         this.name = name;
//         this.age = age;
//         this.boardmarks = boardmarks;
//     }
//     MinPlacementAge(MinAge) {
//         return (MinMarks) => {
//             if(this.boardmarks > MinMarks && this.age > MinAge) {
//                 console.log(`${this.name} is eligible for placement`)
//             } else {
//                 console.log(`${this.name} is not eligible for placement`)
//             }
//         }
//     }
// }
// const student1 = new student('james',29,54);
// const student2 = new student('martin', 17, 45);

// student1.MinPlacementAge(18)(35);   
// student2.MinPlacementAge(18)(35);   

// Normal function look at the current object which is calling that function
// whereas fat Arrow function looks at the object which is in the lexical scope of it.
//  means it calls the parent funtion.
// var name = 'vikas';
// let me = {
//     name: 'Martin Luther',
//     thisInArrow: () => {
//         console.log(`my name is ${this.name}`); // No 'this' binding works here
//     },
//     thisInRegular() {
//             console.log(`my name is ${this.name}`); // 'this' binding works here
//     }
// };
// me.thisInArrow();
// me.thisInRegular();


let user = {
    name: 'Martin Luther',
    age: 28,
    thisInArrow: () => {
        console.log(`my name is ${this.name}`); // No 'this' binding works here
    },
    printdetails() {
        const findName = () => {
            console.log(`my name is ${this.name}`); // 'this' binding works here
        }
        const findAge = () => {
            console.log(`my age is ${this.age}`);
        }
        findName();
        findAge();
    }
};
user.thisInArrow();
user.printdetails();