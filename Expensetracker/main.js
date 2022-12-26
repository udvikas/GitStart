
const myform = document.querySelector('#my-form')
const expense = document.querySelector('#amount')
const desc = document.querySelector('#desc')
const category = document.querySelector('#category')
const msg = document.querySelector('.msg')
const userList = document.querySelector('.list')
const btn = document.querySelector('.btn');

myform.addEventListener('submit', onsubmit);
function onsubmit(e) {
    // e.preventDefault();
    if(expense.value === '' || desc.value === '') {
        msg.classList.add('error')
        msg.innerHTML = 'Please Enter all fields';
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${expense.value} : ${desc.value} : ${category.value}`))

        userList.appendChild(li)
       
        expense.value = '';
        desc.value = '';
        category.value = ''
    }
}

function dataToLocalStorage(event) {
    event.preventDefault();
    const expense = event.target.expense.value;
    const desc = event.target.description.value;
    const category = event.target.category.value;

    myobj = {
        Expense: expense,
        Desc: desc,
        Category: category
    };
    const myObj_serilized = JSON.stringify(myobj);

    localStorage.setItem(myobj.Desc, myObj_serilized);

    const myObj_deserialized  = JSON.parse(localStorage.getItem(myobj.Expense, myobj.Desc, myobj.Category));

    const keyArray = Object.keys(myobj);
    keyArray.forEach((key) => {
        console.log(myobj[key]);
    })

}

window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i < localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showDataOnScreen(userDetailsObj)
    }
})

function showDataOnScreen(user) {
    // if(JSON.parse(localStorage.getItem(user.Desc) !== null)) {
    //     removeUserFromScreen(user.Desc);
    // }
    const parentNode = document.getElementsByClassName('list');
    const childHTML = `<li id=${user.Expense} ${user.Desc} ${user.Category}>
    <button id="btn2" onClick=DeleteUser('${user.Expense}')> Delete </button>
    <button id="btn3" onClick=editUserDetails('${user.Expense}','${user.Desc}',${user.Category})> Edit </button>
    </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML; 
}

function DeleteUser(description) {
    localStorage.removeItem(description)
    removeUserFromScreen(description);
}

function editUserDetails(expense, description, category) {
    document.getElementById('amount').value = 'expense'
    document.getElementById('desc').value = 'description'
    document.getElementById('category').value = 'category'
    DeleteUser(expense, description, category);
}

function removeUserFromScreen(description) {
    const parentNode = document.getElementsByClassName('list');
    const childNodeToBeDeleted = document.getElementById('desc');

    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted);
    }
}