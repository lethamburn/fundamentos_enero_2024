const pelicula = {
  titulo: "Dune: Parte 2",
  año: 2024,
  director: "Denis Villeneuve",
  guionista: "Jon Spaihts, Denis Villeneuve, Eric Roth",
  fotografia: "Greig Fraser",
  musica: "Hans Zimmer",
  notaMedia: 8.5,
  poster:
    "https://sm.ign.com/ign_es/photo/d/dune-part-/dune-part-two-exclusive-new-poster-features-its-stellar-cast_aynf.jpg",
};

//Recupero main
const main = document.querySelector("main");
//Creo mi plantilla literal o template string:
const template = `
<section>
    <h2>${pelicula.titulo}</h2>
    <img src=${pelicula.poster} alt=${pelicula.titulo} />
    <h3>${pelicula.año}</h3>
    <h4>Director: ${pelicula.director}</h4>
    <h4>Guión: ${pelicula.guionista}</h4>
    <h4>Fotografía: ${pelicula.fotografia}</h4>
    <h4>BSO: ${pelicula.musica}</h4>
    <p>${pelicula.notaMedia}</p>
</section>
`;

//Vamos a insertarle el HTML que hemos creado a main
main.innerHTML = template;
