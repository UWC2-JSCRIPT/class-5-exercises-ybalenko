// Create a new <a> element containing the text "Buy Now!" 
// with an id of "cta" after the last <p>

const newE = document.createElement('a')
newE.setAttribute('id', 'cta')
newE.innerText = 'Buy now!'
//body.appendChild(newE);
pE = document.querySelectorAll('body > main > p')[0];
pE.insertAdjacentElement('afterend', newE);
// Access (read) the data-color attribute of the <img>,
// log to the console
const img = document.getElementsByTagName('img')[0];
const colorImg = img.getAttribute('data-color')
console.log(colorImg)

// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const newL = document.getElementsByTagName('li')[2];
newL.setAttribute('class', 'highlight')

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
const removeL = document.querySelector("body > main > p");
removeL.remove()
