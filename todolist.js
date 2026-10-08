const input = document.querySelector("input");
const bouton = document.querySelector("button");
const liste = document.querySelector("ul");
 
bouton.addEventListener("click", function() {
  console.log("Button waz clicked !");
 
  const task = input.value;
  console.log(task);
 
  const ligne = document.createElement("li");
  ligne.innerText = task;
  liste.appendChild(ligne);
 

});