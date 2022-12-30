//intitalize the count
//listen to click
//increment the count when clicked
//change the count_el int html
let countElement = document.getElementById("count-pep")
let saveEl = document.getElementById("save-el")

let count = 0

function increment() {
    count=count+1
    countElement.innerText = count
}

//save event

function save() {
    let prev = count + " - "
    saveEl.textContent += prev
    countElement.textContent = 0
    count = 0
}



