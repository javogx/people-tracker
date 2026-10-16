let counTer = document.getElementById("counter")
let savE = document.getElementById("save")
let parA = document.getElementById("para")
let count = 0

function increment() {
    count += 1
    counTer.textContent = count
}

function save() {
    parA.textContent += count + " / "
    counTer.textContent = 0
    count = 0
}

