let incrementButton = document.querySelector(".increment")
let decrementButton = document.querySelector(".decrement")
let countView = document.querySelector(".count")

function onIncrement () {
    let count = parseInt (countView.textContent)
    let newCount = count + 1

    countView.textContent = newCount
}

function onDecrement () {
    let count = parseInt (countView.textContent)
    let newCount = count - 1

    countView.textContent = newCount
}

incrementButton.addEventListener("click", onIncrement)
decrementButton.addEventListener("click", onDecrement)