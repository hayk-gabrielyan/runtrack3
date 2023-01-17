document.addEventListener('DOMContentLoaded', function() {
  // Create an article element with some content
  var article = document.createElement("article");
  article.innerHTML = "La vie a beaucoup plus d’imagination que nous”.";
  document.body.appendChild(article);

  // Create a button element
  var button = document.createElement("button");
  button.innerHTML = "Afficher le contenu de l'article dans la console";
  document.body.appendChild(button);

  // Add an event listener to the button to display the article content in the console when clicked
  button.addEventListener("click", function() {
    console.log(article.innerHTML);
  });
});