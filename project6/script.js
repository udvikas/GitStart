
const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const form = document.getElementById('form');
const list = document.getElementById('list');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

// const dummytransaction = [
//     {id: 1, text: "flower", amount: -20},
//     {id: 2, text: "salary", amount: 300},
//     {id: 3, text: "book", amount: -10},
//     {id: 4, text: "camera", amount: 150}
// ];
// let Transaction = [];
const localStorageTransaction = JSON.parse(localStorage.getItem("Transaction"))
let Transaction = localStorage.getItem("Transaction") !== null ? localStorageTransaction : [];
// addtransaction
function addTransaction(e) {
    e.preventDefault();
    if(text.value.trim() == "" || amount.value.trim() == "") {
        alert('Please Enter text and values');
    } else {
        const transaction = {
            id:genrateID(),
            text: text.value,
            amount: +amount.value,
        }
        Transaction.push(transaction);
        addTransactionDOM(transaction);
        updateLocalStorage();
        updateValues();
        text.value = "";
        amount.value = "";
    }

}
// genrate id
function genrateID() {
    return Math.floor(Math.random()*100000000);
}

function addTransactionDOM(transaction) {
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElement('li');

    item.classList.add(transaction.amount < 0 ? "minus" : "plus");

    item.innerHTML = `${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span>
    <button class="delete-btn" onclick="removeTransaction(${transaction.id})">x</button>`

    list.appendChild(item); 
}
//remove Transaction
function removeTransaction(id) {
    Transaction = Transaction.filter(transaction => transaction.id !== id);
    Init();
    updateLocalStorage();
}

function updateValues() {
    const amounts = Transaction.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item),0).toFixed(2);
    const income = amounts.filter(item => item > 0).reduce((acc,item) => (acc += item),0).toFixed(2);
    const expense = (
        amounts.filter(item => item < 0).reduce((acc,item) => (acc += item),0) * -1
    ).toFixed(2);

    balance.innerText = `${total}`
    money_plus.innerText = `$${income}`;
    money_minus.innerText=  `$${expense}`
}

// Update Local Storage
function updateLocalStorage() {
    localStorage.setItem("Transaction", JSON.stringify(Transaction))
}
//InIt App
function Init() {
    list.innerHTML = "";
    Transaction.forEach(addTransactionDOM);
    updateValues();
}
Init();
// addTransactionDOM(Transaction);

form.addEventListener('submit', addTransaction)