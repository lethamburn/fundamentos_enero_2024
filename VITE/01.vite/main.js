//Estamos importando los estilos a través de JS
import "./style.css";
//Importamos peliculas
import peliculas from "./data/peliculas";

const main = document.querySelector("main");
for (const pelicula of peliculas) {
  const div = document.createElement("div");
  div.innerText = pelicula;
  main.appendChild(div);
}
