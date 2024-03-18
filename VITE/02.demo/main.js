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

//Recupero los tres links del HTML
const homeLink = document.querySelector("#homelink");
const perrosLink = document.querySelector("#perroslink");
const materialesLink = document.querySelector("#materialeslink");

//Por cada una de las secciones vamos a recorrer con un bucle su respectivo array e inyectar dinamicamente cada uno de los objetos dentro de las secciones. Para ello podemos utilizar una etiqueta article con las semanticas que elijamos dentro de ellas.

const pintarHome = () => {
  const main = document.querySelector("main");
  //Por seguridad, lo vaciamos
  main.innerHTML = "";
  //Pintamos HTML mediante innerHTML
  main.innerHTML = `
  <img src="https://www.rover.com/blog/wp-content/uploads/2017/11/PARKS.jpg" alt="Perro tumbado" class="perrotumbado"/>
   `;
};

//Voy a encerrar el bucle de los perros y el bucle de los materiales cada uno en una función
const pintarPerros = () => {
  //Recuperamos main
  const main = document.querySelector("main");
  //Por seguridad, lo vaciamos
  main.innerHTML = "";
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
    //Inyectamos todos estos articles dentro de main
    main.appendChild(article);
  }
};

const pintarMateriales = () => {
  //Recuperamos main
  const main = document.querySelector("main");
  //Por seguridad, lo vaciamos
  main.innerHTML = "";
  //Materiales
  for (const material of materiales) {
    //Creamos un article vacio en JS
    const article = document.createElement("article");
    //Le rellenamos el HTML al article con innerHTML
    article.innerHTML = `
  <h3>${material.nombre}</h3>
  <h4>${material.marca} - ${material.precio}€</h4>
  <img src=${material.imagen} alt=${material.nombre}/>
  `;
    //Inyectamos todos estos articles dentro de main
    main.appendChild(article);
  }
};

//Le añadimos los clicks a los links para que ejecuten cada una de las dos funciones que tenemos arriba
perrosLink.addEventListener("click", () => {
  pintarPerros();
});

materialesLink.addEventListener("click", () => {
  pintarMateriales();
});

homeLink.addEventListener("click", () => {
  pintarHome();
});

//Por defecto, la funcion pintarHome se va a ejecutar automaticamente para que al abrir la pagina por primera vez se pinten los perros sin necesidad de pulsar nada
pintarHome();
