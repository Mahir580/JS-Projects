var won = 0;
var lost = 0;

for (i = 1; i <= 5; i = i + 1) {
    var num = parseInt(prompt("Guess a numebr 1-5"));
    var a = Math.random() * 6;
    var b = Math.floor(a);

    if (num == b) {
        console.log("You have won");
        won++
    } else {
        console.log("You have lost. The random number was" + " " + b);
        lost++
    }
}
document.write("You have won" + " " + won + " " + "times <br> <br>");
document.write("You have lost" + " " + lost + " " + "times <br> <br>");
var x = won == 5 ? "A+" : x = won == 4 ? "A" : x = won == 3 ? "A-" : x = won == 2 ? "B" : x = won == 1 ? "C" : "Fail"
document.write(x)