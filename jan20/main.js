const myForm = document.getElementById("myform");
const fName = document.getElementById("fname");
const Email = document.getElementById("email");
const btn = document.getElementById("mybtn");
const list = document.getElementById("listItem");

myForm.addEventListener("submit", onsubmit);

function onsubmit(event) {
  event.preventDefault();
  if (fName.value === "" || Email.value === "") {
    const li = document.createElement("li");
    const li1 = (li.innerText = "Error: Something is Missing");
    li.classList.add("list-item");
    list.append(li);
    console.log(list);
  } else {
    const li = document.createElement("li");
    li.classList.add("list-item");
    li.append(document.createTextNode(`${fName.value} : ${Email.value}`));
    list.append(li);
    console.log(list);
    fName.value = "";
    Email.value = "";
  }
  
}
function dataToLocalStorage(event) {
  event.preventDefault();

  localStorage.setItem("Name", `${fName.value}`);
  localStorage.setItem("Email", `${Email.value}`);

  const myObj = {
    Name: `${fName.value}`,
    Email: `${Email.value}`,
  };
  const serialized = localStorage.setItem("userDetails", JSON.stringify(myObj));
  const deSerialized = JSON.parse(localStorage.getItem('userDetails')) || null;
}


function getName() {
  return localStorage.getItem("userDetails");
}

function updateHTML() {
  var name = getName();
  document.getElementById("greeting").innerHTML = "Hello, " + name + "! Welcome!";
  document.getElementById("storedName").innerHTML = name;
}

function myFunction() {
  // Gets input value
  var name = document.getElementById("myInput").value;

  // Saves data to retrieve later
  localStorage.setItem("userName", name);
  
  // Updates HTML
  updateHTML();
}
