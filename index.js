let count = 0

let counter = document.getElementById('count') 
let decreaseBtn = document.getElementById('decrease-btn')
let resetBtn = document.getElementById('reset-btn')
let increaseBtn = document.getElementById('increase-btn')

function decrease() {
  counter.innerHTML--
}

function reset() {
  counter.innerHTML = 0
}

function increase() {
  counter.innerHTML++
}

decreaseBtn.addEventListener('click', function() {
  decrease()
})

resetBtn.addEventListener('click', function() {
  reset()
})

increaseBtn.addEventListener('click', function() {
  increase()
})