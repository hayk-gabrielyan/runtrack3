document.addEventListener('DOMContentLoaded', function() {
// Create a textarea element with id "keylogger"
var textarea = document.createElement("textarea");
textarea.id = "keylogger";
document.body.appendChild(textarea);

// Add an event listener to the document to detect key presses
document.addEventListener("keypress", keylog);

function keylog(event){
    var key = event.key;
    var keylogger = document.getElementById("keylogger");

    // check if the active element is keylogger textarea
    if(document.activeElement === keylogger){
        keylogger.value += key;
    }else {
        keylogger.value += key;
    }
}
});





