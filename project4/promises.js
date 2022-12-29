
const cart = ['shoes', 'pants', 'kurta'];

createOrder(cart, function(orderID) {

    proceedToPayment(orderID, function(paymentInfo) {

        showOrderSummary(paymentInfo, function() {

            updateWalletBalance();
        })
})
})

// const promise = createOrder(cart);

// promise.then(function (orderID) {
//     proceedToPayment(orderID) 
// });


createOrder(cart)
.then(function (orderID) {
    return proceedToPayment(orderID)
})
.then(function (paymentInfo) {
    return showOrderSummary(paymentInfo)
})
.then(function (paymentInfo) {
    return updateWalletBalance(paymentInfo)
})

// const GITHUB_Api = "https://api.github.com/users/udvikas";

// const user = fetch(GITHUB_Api);
// console.log(user);

// user.then(function(data) {
//     console.log(data)
// })
