
         
// difference b/w function statement & function expression is Hoisting
// funciton statement aka function declaration
function a() {
    console.log('a called');
}

// function expression
let b = function() {
    console.log('b called');
}
a();
b(); 

// Anonymous function (it is used Where functions are used as a value and we can assign this function to a variable)
// function () {

// }

// Named Function Expression

let c = function abc() {
    console.log('c called');
}
c();
// abc(); // reference Error : abc is not defined.
// Difference between parameters and arguments?
let d = function(parma1, param2) {
    return parma1 * param2;
}
console.log(d(3, 2)); // arguments inside function calls
// first class function (or funtion class citizens)
// the ability to use fucntion as a value is known as fcf. 
// it can be passed as an argument in another funtion and can be returned from the function
let E = function(param1) {
    return function xyz() {

    }
}
// function xyz() {

// }
console.log(E());
// Aerrow Function

