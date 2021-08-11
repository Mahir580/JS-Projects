var character = document.querySelector("#character");
var block = document.querySelector("#block");

function jump() {
    if (character.classList != "anime") {
        character.classList.add("anime")
    }
    character.classList.add("anime")
    setTimeout(function() {
        character.classList.remove("anime")
    }, 500);
}
var checkLose = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockleft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockleft < 1) {
        score++
    }
    if (blockleft < 20 && blockleft > 0 && characterTop >= 130) {
        block.style.animation = "none"
        block.style.display = "none"
        alert("U lost")
    }
}, 10)