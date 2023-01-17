document.addEventListener('DOMContentLoaded', function() {
  // Create a button element with id "button"
  var button = document.createElement("button");
  button.id = "button";
  button.innerHTML = "Afficher/Cacher l'article";
  document.body.appendChild(button);

  // Create an article element with some content and id "article"
  var article = document.createElement("article");
  article.id = "article";
  article.innerHTML = "L'important n'est pas la chute, mais l'atterrissage.";
  article.style.display = "none"; //hide the article initially
  document.body.appendChild(article);

  // Add an event listener to the button to call the showhide function when clicked
  button.addEventListener("click", showhide);
});


//function to handle the show/hide of article
function showhide(){
  var article = document.getElementById("article");
  if(article.style.display === "none"){
      article.style.display = "block";
  }else{
      article.style.display = "none";
  }
}




