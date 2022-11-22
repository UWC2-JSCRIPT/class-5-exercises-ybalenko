// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.

let counter = 0;
const pCounter = document.createElement('p')
pCounter.innerHTML = counter;
const btnPlus = document.createElement('button');
btnPlus.innerHTML = '+';
btnPlus.addEventListener('click', (e) => {
    counter++;
    pCounter.innerHTML = counter;
})

const btnMinus = document.createElement('button');
btnMinus.innerHTML = '-';
btnMinus.addEventListener('click', (e) => {
    counter--;
    pCounter.innerHTML = counter;
})

const body = document.getElementsByTagName('body')[0];
body.appendChild(btnMinus);
body.appendChild(btnPlus);
body.appendChild(pCounter);