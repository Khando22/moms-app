// Grabbing Form 
let form = document.addItem;
// Grabbing Item Input 
let text = document.getElementById("title");

// Grabbing The List
let listContainer = document.getElementById("list");


// adding event listener on form which will add items to list.
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let inputTxt = text.value;
    let newItem = addListItem(inputTxt);
    listContainer.appendChild(newItem);
    text.value = "";
})



//Function to create new list items

function addListItem(text) {
    
    // creating new list item
    let listItem = document.createElement("li");

    // creating list item content
    let itemDiv = document.createElement("div");
    itemDiv.textContent = text;

    // create edit button
    let editBtn = document.createElement("button")
    editBtn.textContent = "edit";
    editBtn.addEventListener("click", edit )


    // save button
    let saveBtn = document.createElement("button")
    saveBtn.textContent = "save";
    saveBtn.style.display = "none";
    saveBtn.addEventListener("click", save)

    //creating button with event listener
    let xBtn = document.createElement("button");
    xBtn.addEventListener( "click" , (event)=> {
        event.target.parentNode.style.display = "none";
    })
    xBtn.textContent = "X";

    // Place created elements inside list item
    listItem.appendChild(itemDiv);
    listItem.appendChild(saveBtn);
    listItem.appendChild(editBtn);
    listItem.appendChild(xBtn);
    return listItem;
   
}

    
// function to handle edit button

function edit(e) {
       let editBtn = e.target;
       let saveBtn = e.target.previousSibling;
        editBtn.style.display = "none";
        saveBtn.style.display = "inline";
        let inputElement = document.createElement("input");
        inputElement.classList.add("input");
        inputElement.style.display = "block";
        inputElement.style.margin = "5px auto";
        inputElement.style.width = "100%";
        inputElement.value = e.target.parentNode.firstChild.textContent;
        e.target.parentNode.append(inputElement);
    
}

// function to handle save button

function save(e) {
        let saveBtn = e.target;
        let inputBox = event.target.parentNode.lastChild;
        event.target.parentNode.firstChild.textContent = inputBox.value;
        inputBox.style.display = "none";
        saveBtn.style.display="none";
        let editBtn = event.target.nextSibling;
        editBtn.style.display = "inline";
    
}



