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

    // create new li Element
    const ListItems = document.createElement('li');
    
    ListItems.className = 'list-group-item';

    //add textNode with input value
    let textNode = document.createTextNode(newItem);
    
    // console.log(textNode);

    ListItems.appendChild(textNode);
   
    // create button element
    const deleteBtn = document.createElement('button');
     
    deleteBtn.className = 'btn btn-danger btn-sm float-right  delete';
    
    const textIndeleteBtn = document.createTextNode('X');
    deleteBtn.appendChild(textIndeleteBtn);
    ListItems.appendChild(deleteBtn);

    itemList.appendChild(ListItems);
    // console.log(itemList); 

    const editBtn = document.createElement('button');
    editBtn.className = 'btn btn-info btn-sm float-right mx-2';
    const editText = document.createTextNode('Edit');
    editBtn.appendChild(editText);
    ListItems.appendChild(editBtn);
    for (let i = 0; i < ListItems.length; i++) {
        itemList.appendChild(ListItems[i]);
    }
    
    console.log(ListItems);

}


function removeItem(e) {
    e.preventDefault();
    if(e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            const li = e.target.parentElement
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
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        }else {
            item.style.display = 'none';
        }
        console.log(itemName);
    })
    
}

// const list2 = document.getElementsByTagName('li');


