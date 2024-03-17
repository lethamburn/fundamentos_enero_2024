const peliculas = [
  {
    titulo: "Las Cronicas de Riddick",
    poster: "https://m.media-amazon.com/images/I/71Et04Wpd+L._AC_UF894,1000_QL80_.jpg",
    año: 2000,
    director: "Pepito",
    productora: "Pepito Films"
  },
  {
    titulo: "El Padrino",
    poster: "https://m.media-amazon.com/images/I/61iGpCMmDfL.jpg",
    año: 1972,
    director: "Francis Ford Coppola",
    productora: "Paramount Pictures",
  },
  {
    titulo: "El Padrino II",
    poster: "https://m.media-amazon.com/images/I/81vCVaD5JYL.jpg",
    año: 1974,
    director: "Francis Ford Coppola",
    productora: "Paramount Pictures",
  },
  {
    titulo: "El Padrino III",
    poster:
      "https://www.originalfilmart.com/cdn/shop/products/godfather_part_3_1990_teaser_original_film_art_5000x.jpg?v=1620935103",
    año: 1990,
    director: "Francis Ford Coppola",
    productora: "Paramount Pictures",
  },
  {
    titulo: "Cadena perpetua",
    poster:
      "https://m.media-amazon.com/images/I/519FWR-vJRL._AC_UF894,1000_QL80_.jpg",
    año: 1994,
    director: "Frank Darabont",
    productora: "Castle Rock Entertainment",
  },
  {
    titulo: "El club de la pelea",
    poster: "https://m.media-amazon.com/images/I/71UUUCm0qoL.jpg",
    año: 1999,
    director: "David Fincher",
    productora: "20th Century Fox",
  },
  {
    titulo: "Forrest Gump",
    poster:
      "https://m.media-amazon.com/images/I/81537OgBznL._AC_UF894,1000_QL80_.jpg",
    año: 1994,
    director: "Robert Zemeckis",
    productora: "Paramount Pictures",
  },
  {
    titulo: "La lista de Schindler",
    poster: "https://es.web.img2.acsta.net/pictures/14/02/27/09/35/442750.jpg",
    año: 1993,
    director: "Steven Spielberg",
    productora: "Universal Pictures",
  },
  {
    titulo: "El Señor de los Anillos: El retorno del Rey",
    poster:
      "https://image.tmdb.org/t/p/original/5fsbtdPKfpD3pZ7brNoRUOVlfK7.jpg",
    año: 2003,
    director: "Peter Jackson",
    productora: "New Line Cinema",
  },
  {
    titulo: "Pulp Fiction",
    poster:
      "https://static.posters.cz/image/750/posters/pulp-fiction-cover-i1288.jpg",
    año: 1994,
    director: "Quentin Tarantino",
    productora: "Miramax Films",
  },
  {
    titulo: "El caballero oscuro",
    poster: "https://m.media-amazon.com/images/I/51NHuXaBKZL.jpg",
    año: 2008,
    director: "Christopher Nolan",
    productora: "Warner Bros. Pictures",
  },
];

for (const pelicula of peliculas) {
  const template = `
  <article>
     <h2>${pelicula.titulo}</h2>
     <img src=${pelicula.poster} alt=${pelicula.titulo}/>
     <h3>${pelicula.año}</h3>
     <p>${pelicula.director} - ${pelicula.productora}</p>
  </article>
  `;
  document.body.innerHTML += template;
}
