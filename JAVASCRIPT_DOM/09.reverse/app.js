const arrayOriginal = [
  "El Padrino",
  "El Padrino II",
  "El Padrino III",
  "Cadena perpetua",
  "El Club de la lucha",
  "Forrest Gump",
  "La Lista de Schindler",
  "El Señor de los Anillos: El retorno del Rey",
  "Pulp Fiction",
  "El Caballero oscuro",
  "La trilogía original de Star Wars",
  "Matrix",
  "Ciudadano Kane",
  "Casablanca",
  "Titanic",
  "El Silencio de los corderos",
  "Psicosis",
  "El Bueno, el feo y el malo",
  "La vida es bella",
  "Raiders of the Lost Ark",
];

//Recuperamos la lista para poder pintar las peliculas
const listado = document.querySelector("#listado");
//Ordenamos las peliculas alfabeticamente
arrayOriginal.sort();
//Recorro las películas y las pinto en la lista
for (const pelicula of arrayOriginal) {
  //Creo un li vacio
  const li = document.createElement("li");
  //Le doy valor al li con el texto de pelicula
  li.textContent = pelicula;
  //Le añadimos cada uno de los li a la lista listado
  listado.appendChild(li);
}

//Recuperamos el botón
const ordenBtn = document.querySelector("#ordenBtn");
//Añadimos un evento click
ordenBtn.addEventListener("click", () => {
  //Vacio el ul para que no se me acumulen los lis al pulsar el boton
  listado.innerHTML = "";
  //Desordenamos las peliculas alfabeticamente
  arrayOriginal.reverse();
  //Recorro las películas y las pinto en la lista
  for (const pelicula of arrayOriginal) {
    //Creo un li vacio
    const li = document.createElement("li");
    //Le doy valor al li con el texto de pelicula
    li.textContent = pelicula;
    //Le añadimos cada uno de los li a la lista listado
    listado.appendChild(li);
  }
});
