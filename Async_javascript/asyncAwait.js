
// console.log('person1: show tickets');
// console.log('person2: show tickets');

// const promiseWifeBringingTickets = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket');
//     }, 3000)
// });
// promiseWifeBringingTickets.then((t) => {
//     console.log(`person3: show ${t}`);
// });
// console.log('person4: show tickets');
// console.log('person5: show tickets');

// console.log('person1: show tickets');
// console.log('person2: show tickets');

// const promiseWifeBringingTickets = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ticket');
//     }, 3000)
// });

// const getPopcorn = promiseWifeBringingTickets.then((t) => {
//     console.log(`wife: I have the tickets`);
//     console.log('Husband: We should go in');
//     console.log('wife: No, I am hungry!');
//     return new Promise((resolve, reject) => resolve(`${t} popcorn`));
// });
//    const getButter = getPopcorn.then((t) => {
//     console.log('Husband: I got some popcorn');
//     console.log('Husband: Now, We should go in');
//     console.log('Wife: No, i also want butter in my popcorn');
//     return new Promise((resolve,reject) => resolve(`${t} Butter`));
//    });
//    getButter.then((t) => console.log(t));

// console.log('person4: show tickets');
// console.log('person5: show tickets');

console.log('person1: show tickets');
console.log('person2: show tickets');

// const preMovie = async() => 'PreMovie'
// preMovie().then((m) => console.log(m));

const preMovie = async() => {
    const promiseWifeBringingTickets = new Promise((resolve, reject) => {
        setTimeout(() => reject('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve, reject) => resolve(`popcorn`));
    const getCandy = new Promise((resolve, reject) => resolve(`candy`));
    const getCoke  = new Promise((resolve, reject) => resolve(`coke`));

    let ticket = await promiseWifeBringingTickets;


    let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getCoke]);
    // console.log(`${popcorn}, ${candy}, ${coke}`);
    // let ticket;
    // try {
    //     ticket = await promiseWifeBringingTickets;
    // } catch(e) {
    //     ticket = 'sad face'
    // }
    // return ticket;
    // console.log(`wife: I have the ${ticket}`);
    // console.log('Husband: We should go in');
    // console.log('wife: No, I am hungry!');

    // let Popcorn = await getPopcorn;

    // console.log(`Husband: I got some ${Popcorn}`);
    // console.log('Husband: Now, We should go in');
    // console.log('Wife: No, i also want butter in my popcorn');

    // let Butter = await addButter;

    // console.log(`Husband: I got some ${Butter} on popcorn`);
    // console.log('Husband: anything else');
    // console.log(`wife: I want some drink`);

    // let coldDrinks = await getColdDrinks;

    // console.log(`Husband:here is your ${coldDrinks}`);
    // console.log(`Husband: Now anything else for God sake`)
    // console.log(`wife: let's go! we are getting late`);
    // console.log(`Husband: thanks for reminder *grins*`)

    
    
}
// preMovie().then((m) => console.log(`person3: show ${m}`));

// console.log('person4: show tickets');
// console.log('person5: show tickets');