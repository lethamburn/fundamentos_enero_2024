const ropa = [
  {
    title: "Camiseta de rayas marineras",
    price: 18,
    talla: "S",
  },
  {
    title: "Vestido",
    price: 25,
    talla: "M",
  },
  {
    title: "Camisa de manga larga",
    price: 22,
    talla: "L",
  },
  {
    title: "Blusa de manga corta",
    price: 19,
    talla: "S",
  },
  {
    title: "Pantalón corto",
    price: 20,
    talla: "M",
  },
  {
    title: "Bañador",
    price: 28,
    talla: "L",
  },
  {
    title: "Conjunto de pijama y Camisón",
    price: 24,
    talla: "S",
  },
];

const camisetaRayas = ropa.find((elemento) => elemento.title === "Camiseta de rayas marineras");
console.log(camisetaRayas)