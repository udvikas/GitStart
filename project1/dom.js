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
const headerTitle = document.getElementById('header-title');
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);

// headerTitle.innerText = 'Goodbye'
// headerTitle.textContent = 'Hello';
headerTitle.innerHTML = '<h3>Welcome</h3>'
// headerTitle.style.borderBottom = 'solid 3px red';
const header = document.getElementById("main-header");
header.style.borderBottom = 'solid 3px red';

// getElementsByClassName
const items = document.getElementsByClassName('list-group-item');
console.log(items);
items[1].textContent = 'HELLO ITEM 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'cyan';
// items.style.backgroundColor = 'gray' : wrong way.
for (let i = 0; i < items.length; i++) {
    items[i].style.backgroundColor = '#f4f4f4';
    items[i].style.color = 'brown';
}