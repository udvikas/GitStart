// console.log(window);
// window.alert(1);

// selecting the things from DOM
// Single ELement
// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

// Multiple Element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// Manipulating the DOM or changing the things in the DOM(user interface).
// const ul = document.querySelector('.items');
// // ul.remove();
// // ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Karl';
// ul.lastElementChild.innerHTML = '<h5>Gracious</h5>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'green';

// const btn = document.querySelector('.btn');
// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     // console.log(e.target.className);
//     document.querySelector('#my-form').style.background = 'cyan';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>what up</h1>'
// })

// // const form = document.querySelector('.btn');
// btn.addEventListener('mouseover', (e) => {
//     e.preventDefault();
//     // console.log(e.target.className);
//     document.querySelector('#my-form').style.background = 'orange';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Gracious!</h1>'
// })
// btn.addEventListener('mouseout', (e) => {
//     e.preventDefault();
//     // console.log(e.target.className);
//     document.querySelector('#my-form').style.background = 'magenta';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>NeHow!</h1>'
// })



// btn.addEventListener('click', (e) => {
//     e.preventDefault();
    
//     document.querySelector('.items').firstElementChild.style.color = 'green';
//     document.querySelector('.items').children[1].style.color = 'yellow'; 

// })

const myform = document.querySelector('#my-form')
const nameInput = document.querySelector('#name')
const emailInput = document.querySelector('#email')
const msg = document.querySelector('.msg')
const userList = document.querySelector('#userDetails')
const btn = document.querySelector('.btn');

myform.addEventListener('submit', onsubmit);
function onsubmit(e) {
    // e.preventDefault();
    // console.log(nameInput.value);
    if(nameInput.value === '' || emailInput.value === '') {
        // alert('Please fill the required field');
        msg.classList.add('error')
        msg.innerHTML = 'Please Enter all fields';
        // setTimeout(() => msg.remove(), 3000);
    } else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`))

        // userList.appendChild(li).style.backgroundColor = 'cyan';
       
    

        //clear fields
        nameInput.value = '';
        emailInput.value = '';
    }
}
function dataToLocalStorage(event) {
    event.preventDefault();
    const name = event.target.userName.value;
    const email = event.target.emailID.value;

    // localStorage.setItem('Name', name);
    // localStorage.setItem('Email', email);

    const myObj = {
        Name: name,
        Email: email
    };
    const myObj_serialized = JSON.stringify(myObj);
    localStorage.setItem(myObj.Email, myObj_serialized);
    showDataOnScreen(myObj);
    
    const myObj_Deserialized =   JSON.parse(localStorage.getItem("myObj.Name"));
    // console.log(myObj_Deserialized);
    // console.log(Object.keys(myObj));

    const keyArray = Object.keys(myObj);
    keyArray.forEach(key => {
        console.log(myObj[key]);
    })
    
}
window.addEventListener("DOMContentLoaded", () => {
    const localStorageObj = localStorage;
    const localstoragekeys  = Object.keys(localStorageObj)

    for(var i =0; i< localstoragekeys.length; i++){
        const key = localstoragekeys[i]
        const userDetailsString = localStorageObj[key];
        const userDetailsObj = JSON.parse(userDetailsString);
        showDataOnScreen(userDetailsObj)
    }
})
// localStorage.setItem('name', 'harry');
// console.log(localStorage.getItem('name'));
// localStorage.removeItem('name');

// sessionStorage.setItem('name','peter');
// console.log(sessionStorage.getItem('name'));
// sessionStorage.removeItem('name');


// document.cookie = 'name=peter; expires=' + new Date(9999, 0, 1).toUTCString();
// document.cookie = 'lastname= smith; expires=' + new Date(9999, 0, 1).toUTCString();
// console.log(document.cookie);

// const arr = ["Name", "Email"];
// localStorage.setItem("myarray", JSON.stringify(arr));
// console.log(localStorage);
function showDataOnScreen(user) {
    
    if(localStorage.getItem(user.Email) !== null) {
        removeUserFromScreen(user.Email);
    }
    const parentNode = document.getElementById("userDetails");
    const childHTML = `<li id=${user.Email}> ${user.Name} - ${user.Email}
                       <button id="btn2" onClick=DeleteUser('${user.Email}')> Delete  </button>
                       <button id="btn3" onClick=editUserDetails('${user.Email}','${user.Name}')> Edit </button>
                       </li>`;
    parentNode.innerHTML = parentNode.innerHTML + childHTML; 
}

function DeleteUser(emailID) {
    console.log(emailID);
    localStorage.removeItem(emailID);
    removeUserFromScreen(emailID);
}

function editUserDetails(emailID,name) {

    document.getElementById('name').value = name;
    document.getElementById('email').value = emailID;

    DeleteUser(emailID, name);
}

function removeUserFromScreen(emailID) {
    const parentNode = document.getElementById('userDetails');
    const childNodeToBeDeleted = document.getElementById(emailID);

    if(childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted);
    }
}