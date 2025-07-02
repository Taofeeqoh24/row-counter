let welcomeEl = document.getElementById('welcome-el');

let name = prompt("What is your name?")
let greeting = "Hi, Welcome to this page, "

let namedGreeting = greeting + name;

// welcomeEl.innerText = namedGreeting;

welcomeEl.innerText = namedGreeting + "👋";


let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0



function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

//Exercise
// let myPoints = 3

// function add3Points() {
//     myPoints += 3
// }

// function remove1Points() {
//     myPoints -= 1
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Points()
// remove1Points()

// console.log(myPoints)