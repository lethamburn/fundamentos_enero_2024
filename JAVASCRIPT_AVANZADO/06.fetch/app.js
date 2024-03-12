//Lo primero que hacemos en el fetch es indicarle la dirección o el endpoint que vamos a atacar en una API
//El segundo paso es convertir nuestro json a lenguaje legible
//El tercer paso es sacarlos por consola
const pintarPersonajes = (personajes) => {
  for (const personaje of personajes) {
    const template = `
    <h2>${personaje.name}</h2>
    <img src=${personaje.image} alt=${personaje.name}/>
   `;
    document.body.innerHTML += template;
  }
};

//THEN
/* fetch("https://rickandmortyapi.com/api/character")
  .then((respuesta) => respuesta.json())
  .then((datos) => pintarPersonajes(datos.results)); */

//ASYNC AWAIT
const traerPersonajes = async () => {
  const respuesta = await fetch("https://rickandmortyapi.com/api/character");
  const datos = await respuesta.json();
  pintarPersonajes(datos.results);
};

traerPersonajes()