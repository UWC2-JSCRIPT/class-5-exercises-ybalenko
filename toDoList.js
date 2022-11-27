// If an li element is clicked, toggle the class "done" on the <li>

const doneListItem = function (e) {
    e.preventDefault();
    e.target.parentNode.setAttribute('class', 'done')
}


// If a delete link is clicked, delete the li element / remove from the DOM


const deleteListItem = function (e) {
    e.preventDefault();
    e.target.parentNode.remove();

}


// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
const btnAdd = document.querySelector("body > main > div > a")
btnAdd.addEventListener('click', (e) => {
    addListItem(e)
})

const addListItem = function (e) {
    e.preventDefault();
    const input = document.querySelector("body > main > div > input[type=text]");
    const text = input.value; // use this text to create a new <li>
    const newI = document.createElement('li');
    const spanE = document.createElement('span');
    spanE.innerText = text;
    spanE.addEventListener('click', (e) => {
        doneListItem(e)
    })
    const aE = document.createElement('a');
    aE.setAttribute('class', 'delete');
    aE.innerText = 'Delete';
    aE.addEventListener('click', (e) => {
        deleteListItem(e)
    })
    newI.appendChild(spanE);
    newI.appendChild(aE);
    const itemList = document.querySelector("body > main > ul")
    itemList.appendChild(newI)


    // Finish function here
};
