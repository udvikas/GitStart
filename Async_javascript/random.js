// function buyCar(cb1, cb2, cb3) {
//   setTimeout(() => {
//     console.log("first i will buy a car");
//     cb1(cb2, cb3);
//   }, 2000);
// }

// function planTrip(cb1, cb2) {
//   setTimeout(() => {
//     console.log("then we will plan a trip to manali");
//     cb1(cb2);
//   }, 2000);
// }

// function reachManali(cb) {
//   setTimeout(() => {
//     console.log("Reached Manali");
//     cb();
//   }, 1000);
// }

// function reachMountain() {
//     setTimeout(() => {
//         console.log('Climbing Mountain');
//     }, 1000)
// }
// buyCar(planTrip, reachManali, reachMountain);


function buyCar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("first i will buy a car");
    }, 2000);
  })
  }
  
  function planTrip() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("then we will plan a trip to manali");
      }, 2000);
    }) 
  }
  
  function reachManali() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Reached Manali");
      }, 1000);
    })
  }
  
  function reachMountain() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
       reject('Error: Some accident is happened');
    }, 1000)
    })
  }

  // buyCar().then((msg) => {
  //   console.log(msg);
  //   planTrip().then((msg) => {
  //     console.log(msg);
  //     reachManali().then((msg) => {
  //       console.log(msg);
  //       reachMountain().then((msg) => {
  //         console.log(msg);
  //       })
  //     })
  //   })
  // })

  async function showData() {
    try {
    const msg1 = await buyCar();
    console.log(msg1);
    const msg2 = await planTrip();
    console.log(msg2);
    const msg3 = await reachManali();
    console.log(msg3);
    const msg4 = await reachMountain();
    console.log(msg4);
  }catch(err) {
    console.log(err);
  }
  }
  showData();