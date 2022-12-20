
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// };
//     console.log(a);
//     console.log(b);
//     console.log(c);

// var a = 100;
// {
//     var a = 10;
//     let b = 20;
//     const c = 30;

//     console.log(a);
//     console.log(b);
//     console.log(c);
// };
//     console.log(a);

// var c = 100;
// function abc() {
//     var c = 10;
//     console.log(c);
// }
//   abc();
//   console.log(c);

// 1).
// var a = 50;

// {
// var a =30;
// let b = 20;
// let c = 30;
// }

// console.log(a)

// 2)

// const a = 50;

// {
// var a =30;
// let b = 20;
// let c = 30;
// }

// console.log(a)

// 3)

// let a = 50;

// {
// var a =30;
// let b = 20;
// let c = 30;
// }

// console.log(a)

// 4).

// var a = 50;

// function fun()
// {
// var a = 30;
// let b = 20;
// let c = 30;
// }

// fun();  // 30 20 30
// console.log(a) // 30

// 5)
// let a = 50;

// function fun(){

// var a = 30;
// let b = 20;
// let c = 30;

// }

// fun();
// console.log(a)

// 6)
// const a = 10;

// {
// var a = 10;
// }

// console.log(a)

// 7)
// const a = 10; // script scope

// {

// const a = 20; // Block scope

// {
// const a = 50; // Block scope
// console.log(a);
// }

// console.log(a)
// }
// console.log(a)

// 8)
// const a = 10;

// {

// const a = 20;

// {

// console.log(a);

// }

// console.log(a)

// }

// console.log(a)

// 9).



var x = 2;
var add = function() {
    var y = 1;
    return x + y;
};
var res = add()
console.log(res);