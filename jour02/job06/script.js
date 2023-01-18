var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var userInput = [];

document.addEventListener("keydown", function(e) {
    userInput.push(e.keyCode);
    if (userInput.toString().indexOf(konamiCode) >= 0) {
        // action à déclencher
        document.body.style.backgroundColor = "hwb(210 20% 40%)";
        alert("Code Konami activé!");
        
    }
});