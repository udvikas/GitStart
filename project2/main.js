const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.getElementById('filter');

// form submit events
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItem);


// console.log(listEdit);
// Add items
function addItem(e) {
    e.preventDefault();
    
    // get input value
    const newItem = document.getElementById('item').value;
    const newItem1 = document.getElementById('item1').value;
    // create new li Element
    const ListItems = document.createElement('li');
    
    ListItems.className = 'list-group-item';

    //add textNode with input value
    let textNode = document.createTextNode(newItem);
    let textNode1 = document.createTextNode(newItem1);
    // console.log(textNode);
    
        // ListItems.appendChild(textNode);
        // ListItems.appendChild(textNode1);
     
    
   
    // create button element
    const deleteBtn = document.createElement('button');
     
    deleteBtn.className = 'btn btn-danger btn-sm float-right  delete';
    
    const textIndeleteBtn = document.createTextNode('X');
    deleteBtn.appendChild(textIndeleteBtn);
    
    // ListItems.appendChild(deleteBtn);
  
    // itemList.appendChild(ListItems);
    // console.log(itemList); 

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-info btn-sm float-right mx-2';
    const editText = document.createTextNode('Edit');
    editBtn.appendChild(editText);
    if (newItem && newItem1) {
        ListItems.appendChild(textNode);
        ListItems.appendChild(textNode1);
        ListItems.appendChild(deleteBtn);
        ListItems.appendChild(editBtn);
        itemList.appendChild(ListItems);
    } else {
        console.log('nothing');
    }
    console.log(ListItems);

}


function removeItem(e) {
    e.preventDefault();
    if(e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            const li = e.target.parentElement
            console.log(li);
            itemList.removeChild(li);
        }
    }
}

function filterItem(e) {
    e.preventDefault();
    const text = e.target.value.toLowerCase();
   
    const items = itemList.getElementsByTagName('li');
    
    Array.from(items).forEach(function(item) {
        const itemName = item.firstChild.textContent;
        const itemName1 = item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || itemName1.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
        console.log(itemName);
        console.log(itemName1);
    })
    
}

// const list2 = document.getElementsByTagName('li');


