
const Amount = document.getElementById('amount');
const Pname = document.getElementById('name');
const Category = document.getElementById('cat');
const Add = document.getElementById('btn')
const list = document.getElementById('elec');

Add.addEventListener('click', (event) =>{
    event.preventDefault();

    let myObj = {
        Amount:Amount.value,
        Pname:Pname.value,
        Category:Category.value
    }
    axios.post('https://crudcrud.com/api/aee4bd83c5fa442f8166443969bcf0a1/getData',myObj)
    .then((response) => {
        shownScreen(response.data);
    }).catch((err) => {
        document.body.innerHTML = document.body.innerHTML + '<h6>Something is wrong</h6>';
        console.log(err);
    })
    // localStorage.setItem(myObj.Pname, JSON.stringify(myObj))
    Amount.value = '';
    Pname.value = '';
    Category.value = ''
    // shownScreen(myObj)

})

window.addEventListener('DOMContentLoaded', (event) => {
    event.preventDefault();
    // Object.keys(localStorage).forEach((key) => {
    //     let user = JSON.parse(localStorage.getItem(key))
    //     shownScreen(user)
    // })
    axios.get('https://crudcrud.com/api/aee4bd83c5fa442f8166443969bcf0a1/getData')
    .then((response) => {
        for(let i = 0 ;i < response.data.length; i++) {
            shownScreen(response.data[i]);
        }
    }).catch((err) => {
        console.log(err);
    })

})

function shownScreen(user) {
  const parentNode = document.getElementById('elec');
  
  parentNode.innerHTML = parentNode.innerHTML + `<li id='${user._id}'>${user.Amount} - ${user.Category} - ${user.Pname}<button onClick = deleteUser('${user._id}')>Delete Order</button></li>`
}

function deleteUser(userId) {
    // localStorage.removeItem(userId)
    // removeItemScreen(userId)
    axios.delete(`https://crudcrud.com/api/aee4bd83c5fa442f8166443969bcf0a1/getData/${userId}`)
    .then((response) => {
        removeItemScreen(userId)
    }).catch((err) => {
        console.log(err)
    })
}
function removeItemScreen(pname) {
    let parent = document.getElementById('elec');
    let element = document.getElementById(pname);
    parent.removeChild(element);
}