//methode avec input dans popup
function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true;
    } else {
        return false;
    }
  }
  
  function checkBisextile() {
    var annee = prompt("Entrez une année : ");
    if (bisextile(annee)) {
        alert("L'année " + annee + " est bisextile!");
    } else {
        alert("L'année " + annee + " n'est pas bisextile!");
    }
  }




//methode avec input dans html

// function bisextile(annee) {
//     if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
//         return true;
//     } else {
//         return false;
//     }
//   }
  
//   function checkBisextile() {
//     var annee = document.getElementById("annee").value;
//     if (bisextile(annee)) {
//         alert("L'année " + annee + " est bisextile!");
//     } else {
//         alert("L'année " + annee + " n'est pas bisextile!");
//     }
//   }