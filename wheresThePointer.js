// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

function printMousePos(event) {
    event.target.innerHTML =
        "X: " + event.clientX +
        " - Y: " + event.clientY;
}


let posE = document.querySelectorAll('td');
for (let e of posE) {
    e.addEventListener('click', printMousePos)
}



