let button = document.querySelector("button")
let result = document.querySelector("h3")

let colour = ['green', 'red', 'blue', 'yellow'];

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}
button.addEventListener('click', () => {
    let index = getRandomNumber(0, colour.length - 1);
    result.innerText = colour[index];
});

document.querySelector(".box-1").addEventListener("click", function() {
    alert("You have won")
})
var a = document.querySelector(".box-2").addEventListener("click", function() {
    alert("You have lost. Try again!")
})
document.querySelector(".box-3").addEventListener("click", function() {
    alert("You have lost. Try again!")
})
document.querySelector(".box-4").addEventListener("click", function() {
    alert("You have lost. Try again!")
})