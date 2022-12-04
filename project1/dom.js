// console.dir(document);
//EXPERIMENT THE DOCUMENT OBJECT
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = '134';
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);
//Selecting the things or elements from html
//GETELEMENTBYID
// console.log(document.getElementById('header-title'));
// const headerTitle = document.getElementById('header-title');
// // console.log(headerTitle.textContent);
// // console.log(headerTitle.innerText);

// // headerTitle.innerText = 'Goodbye'
// // headerTitle.textContent = 'Hello';
// headerTitle.innerHTML = '<h3>Welcome</h3>'
// // headerTitle.style.borderBottom = 'solid 3px red';
// const header = document.getElementById("main-header");
// header.style.borderBottom = 'solid 3px red';

// getElementsByClassName
// const items = document.getElementsByClassName('list-group-item');
// console.log(items);
// // items[1].textContent = 'HELLO ITEM 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'cyan';
// // items.style.backgroundColor = 'gray' : wrong way.
// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4';
//     items[i].style.color = 'black';
//     items[i].style.fontWeight = 'bold';
// }
// items[2].style.backgroundColor = 'green';

// GETELEMENTBYTAGNAME
// const li = document.getElementsByTagName('li');
// console.log(li);
// li[1].textContent = 'Welcome to list item 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'cyan';
// // li.style.backgroundColor = 'gray' 
// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = 'purple';
//     li[i].style.color = 'black';
//     li[i].style.fontWeight = 'bold';
// }
// li[2].style.backgroundColor = 'green';

    // QUERYSELECTOR

const header = document.querySelector('#main-header');
header.style.borderBottom = '3px solid blue';

const input = document.querySelector('input');
input.value = 'Gracious';

const submit = document.querySelector('input[type="submit"]');
submit.value = 'send';

// const items = document.querySelector('.list-group-item');
// items.style.color  = 'green';

// Make the 2nd item have green background color
// const SecondItem = document.querySelector('.list-group-item:nth-child(2)');
// SecondItem.style.backgroundColor = 'green';

// Make the 3rd item invisible
// const thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = "none";

// QUERYSELECTORALL

// const liItems  = document.querySelectorAll('li');
// for(let i = 0; i < liItems.length; i++) {
//     liItems[1].style.color = 'green'
// }
// const liItems = document.querySelectorAll('li:nth-child(odd)');
// liItems.style.backgroundColor = 'green';

const titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';
//Choose all the odd elements and make their background green using QuerySelectorALL﻿
const odd = document.querySelectorAll('li:nth-child(odd)');
const even = document.querySelectorAll('li:nth-child(even)');
        for (let i = 0; i < odd.length; i++) {
            odd[i].style.backgroundColor = 'green';
            even[i].style.backgroundColor = '#ccc';  
        }
