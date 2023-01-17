document.addEventListener('DOMContentLoaded', function() {
  let counter = 0;
  
  function addone(){
      counter++;
      document.getElementById("compteur").innerHTML = counter;
  }
  
  // Create a button element with id "button"
  var button = document.createElement("button");
  button.id = "button";
  button.innerHTML = "Ajouter 1";
  document.body.appendChild(button);
  
  // Create a p element with id "compteur"
  var compteur = document.createElement("p");
  compteur.id = "compteur";
  compteur.innerHTML = "0";
  document.body.appendChild(compteur);
  
  // Add an event listener to the button to call the addone function when clicked
  button.addEventListener("click", addone);
  });