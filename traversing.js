// Given the <body> element as variable body,
// access the <main> node and log to the console.
const b = document.querySelector('body');
for (const child of b.children) {
    if (child.tagName == 'MAIN') {
        console.log(child)
        break
    }
}

// Given the <ul> element as variable ul,
// access <body>  and log to the console.
const u = document.querySelector('ul');
console.log(u.parentNode.parentNode)

// Given the <p> element as var p,
// access the 3rd <li>  and log to the console.
const p = document.querySelector('p');
console.log(p.previousSibling.previousSibling.children[2])