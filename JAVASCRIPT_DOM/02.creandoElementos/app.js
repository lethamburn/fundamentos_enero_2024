//Creo un nodo a través de JS
const h1 = document.createElement("h1");
//Añadimos texto a este h1
h1.textContent = "Esto es el título";
console.log(h1);
//Añadimos al body el h1
document.body.appendChild(h1)