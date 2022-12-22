/* let multiply = function(x,y) {

  console.log(x * y);

}

let multiplyByTwo = multiply.bind(this, 4)

multiplyByTwo(8);


function currying using bind
let multiplyByThree = multiply.bind(this, 3)

multiplyByThree(5); */
/* function currying using Clousers*/
// let multiply = function(x) {
//     return function(y) {
//     console.log(x*y)
//     }
//   } 
//   let multiplyByTwo = multiply(2);
//   multiplyByTwo(3);
  
//   let multiplyByThree = multiply(2);
//   multiplyByThree(6);

// function addConstant(constant) {
//   return (value) => {
//     return (value2) => {
//       return value + constant + value2;
//   }
// }
// }
// console.log(addConstant(15)(5)(7));

// fun1()()()
// const fun2 = fun1() 
// const fun3 = fun2()
// fun3()

function fun1() {
  console.log('function 1 is called');
  return function fun2() {

    console.log('function 2 is called');
    return function fun3(){
      console.log('function 3 is called');
    }
  }
}
fun1()()();