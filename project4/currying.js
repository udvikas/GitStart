/* let multiply = function(x,y) {

  console.log(x * y);

}

let multiplyByTwo = multiply.bind(this, 4)

multiplyByTwo(8);


function currying using bind
let multiplyByThree = multiply.bind(this, 3)

multiplyByThree(5); */
/* function currying using Clousers*/
let multiply = function(x) {
    return function(y) {
    console.log(x*y)
    }
  } 
  let multiplyByTwo = multiply(2);
  multiplyByTwo(3);
  
  let multiplyByThree = multiply(2);
  multiplyByThree(6);