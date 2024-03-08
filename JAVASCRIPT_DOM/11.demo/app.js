const peliculas = [
  {
    titulo: "El Padrino",
    año: 1972,
    director: "Francis Ford Coppola",
    poster:
      "https://i.etsystatic.com/35681979/r/il/30d269/3910370144/il_570xN.3910370144_qpwh.jpg",
    estado: "Visto",
  },
  {
    titulo: "El Señor de los Anillos",
    año: 2001,
    director: "Peter Jackson",
    poster:
      "https://m.media-amazon.com/images/I/6143TqGItiL._AC_UF894,1000_QL80_.jpg",
    estado: "Pendiente",
  },
  {
    titulo: "Interstellar",
    año: 2014,
    director: "Christopher Nolan",
    poster: "https://m.media-amazon.com/images/I/91obuWzA3XL.jpg",
    estado: "Viendo",
  },
  {
    titulo: "Origen",
    año: 2010,
    director: "Christopher Nolan",
    poster:
      "https://m.media-amazon.com/images/I/91OiP43E2zL._AC_UF894,1000_QL80_.jpg",
    estado: "Visto",
  },
  {
    titulo: "La Princesa Mononoke",
    año: 1997,
    director: "Hayao Miyazaki",
    poster: "https://m.media-amazon.com/images/I/91zirIhI+7L.jpg",
    estado: "Pendiente",
  },
  {
    titulo: "Parásitos",
    año: 2019,
    director: "Bong Joon-ho",
    poster:
      "https://m.media-amazon.com/images/I/91drDqVGdXL._AC_UF894,1000_QL80_.jpg",
    estado: "Visto",
  },
];

//Recupero mi contenedor main a nivel global
const main = document.querySelector("main");

//Esta función va a pintar la página de bienvenida
const pintarBienvenida = () => {
  main.innerHTML = `
   <h2>Bienvenido/a</h2>
  `;
};
//Esta función va a pintar la página de peliculas
const pintarPeliculas = () => {
  main.innerHTML = `
  <h2>Películas</h2>
  <section id="peliculas"></section>
 `;

  const section = document.querySelector("#peliculas");

  for (const pelicula of peliculas) {
    section.innerHTML += `
    <article>
      <h3>${pelicula.titulo}</h3>
      <h4>${pelicula.director} - ${pelicula.año}</h4>
      <img src=${pelicula.poster} alt=${pelicula.titulo}/>
      <p class=${pelicula.estado}>${pelicula.estado}</p>

    </article>
    `;
  }
};
//Esta función va a pintar la página de series
const pintarSeries = () => {
  main.innerHTML = `
  <h2>Series</h2>
 `;
};

//Por defecto ejecutamos la función de bienvenida
pintarBienvenida();

//Recuperamos los 3 links
const bienvenidalink = document.querySelector("#bienvenidalink");
const peliculaslink = document.querySelector("#peliculaslink");
const serieslink = document.querySelector("#serieslink");

//Le vamos a dar un evento click a cada uno de los links para que disparen las 3 funciones que hemos hecho arriba
bienvenidalink.addEventListener("click", () => {
  pintarBienvenida();
});

peliculaslink.addEventListener("click", () => {
  pintarPeliculas();
});

serieslink.addEventListener("click", () => {
  pintarSeries();
});
