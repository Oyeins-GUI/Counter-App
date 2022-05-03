let counter = document.getElementById('count');
let decreaseBtn = document.getElementById('decrease-btn');
let resetBtn = document.getElementById('reset-btn');
let increaseBtn = document.getElementById('increase-btn');

decreaseBtn.addEventListener('click', () => {
    counter.textContent--;
})

resetBtn.addEventListener('click', () => {
    counter.textContent = 0;
})

increaseBtn.addEventListener('click', () => {
    counter.textContent++;
})
