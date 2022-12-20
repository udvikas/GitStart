
// function z() {
//     var b = 900;
//     function x() {
//         var a = 27;
//         function y() {
//             console.log(a, b);
//         }
//          y();
//     }
//     var z = x();
//     console.log(z);
//     z();

// }

// 1) 

// function x(){

// let a = 10;
// function y(){
// console.log(a);
// }
// y()

// }
// x();

// 2)

// function x(){
// let a = 10;

// function y(){

// console.log(a);
// }
// return y();
// }
// x();

// 3)
//  function x(){

//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     return y;
//     }    
//     console.log(x());

// 4)
// function x(){
//     let a = 10;
//     function y(){
//     console.log(a);
//     }
//     return y;
//     }
//     const z = x()
//     console.log(z());

    // 5)
    // function x(){
    //     let a = 10;
    //     function y(){
    //     console.log(a);
    //     }
    //     a= 50;
    //     return y;
    //     }
        
    //     const z = x()
    //     console.log(z());
// call, apply, bind
let obj = {num:2};

let addTothis = function(a, b, c) {
	return this.num + a + b + c;
}
/* console.log(addTothis.call(obj, 8, 3, 2)); */
/* let arr = [1,2,3]; */
/* console.log(addTothis.apply(obj, arr)); */

let bound = addTothis.bind(obj);
console.log(bound(1,2,4));