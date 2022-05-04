let counter = document.getElementById('count');
let decreaseBtn = document.getElementById('decrease-btn');
let resetBtn = document.getElementById('reset-btn');
let increaseBtn = document.getElementById('increase-btn');
let saveBtn = document.getElementById('save-btn')
let prevCount = document.getElementById('prev-counts')
let clrPrevCount = document.getElementById('clear-prev-count')

decreaseBtn.addEventListener('click', () => {
    count.textContent--;
})

resetBtn.addEventListener('click', () => {
    count.textContent = 0;
})

increaseBtn.addEventListener('click', () => {
    count.textContent++;
})

saveBtn.addEventListener('click', function () {
    let currentCount = counter.textContent

    prevCount.textContent += ` ${currentCount} `
    counter.textContent = 0
})

clrPrevCount.addEventListener('click', function () {
    prevCount.textContent = ''
})
