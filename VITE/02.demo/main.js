//Importamos los estilos
import "./style.css";
//Importamos los arrays de perros y materiales
import perros from "./data/perros.js";
import materiales from "./data/materiales.js";

//Vamos a implementar el cambiador de temas
//Recuperamos el botón y lo almacenamos en una constante
const temaBtn = document.querySelector("#tema");
//Le vamos a añadir un evento click que le añada y le quite una clase al body llamda dark
temaBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

//Recuperamos la seccion de perros y materiales que hemos creado previamente en el HTML
const perrosSection = document.querySelector("#perrosSection");
const materialesSection = document.querySelector("#materialesSection");

//Por cada una de las secciones vamos a recorrer con un bucle su respectivo array e inyectar dinamicamente cada uno de los objetos dentro de las secciones. Para ello podemos utilizar una etiqueta article con las semanticas que elijamos dentro de ellas.

//Perros
for (const perro of perros) {
  //Creamos un article vacio en JS
  const article = document.createElement("article");
  //Le rellenamos el HTML al article con innerHTML
  article.innerHTML = `
  <h3>${perro.raza}</h3>
  <h4>${perro.tamaño} - ${perro.peso_medio}kg</h4>
  <img src=${perro.imagen} alt=${perro.raza}/>
  `;
  //Inyectamos todos estos articles dentro de la seccion perros
  perrosSection.appendChild(article);
}

//Metariales
for (const material of materiales) {
  //Creamos un article vacio en JS
  const article = document.createElement("article");
  //Le rellenamos el HTML al article con innerHTML
  article.innerHTML = `
  <h3>${material.nombre}</h3>
  <h4>${material.marca} - ${material.precio}€</h4>
  <img src=${material.imagen} alt=${material.nombre}/>
  `;
  //Inyectamos todos estos articles dentro de la seccion materiales
  materialesSection.appendChild(article);
}