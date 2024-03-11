const alumnos = [
  "persona",
  "persona",
  "persona",
  "perro",
  "pato",
  "perro",
  "persona",
];

const soloPersonas = alumnos.filter((alumno) => alumno === "persona");
console.log(soloPersonas);

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

const ropaS = ropa.filter((elemento) => elemento.talla === "S");
console.log(ropaS);

const ropaBarata = ropa.filter((elemento) => elemento.price < 20);

const ropaCamis = ropa.filter((elemento) => elemento.title.includes("Camis"));
console.log(ropaCamis);

const ropaSyBarata = ropa.filter(
  (elemento) => elemento.talla === "S" && elemento.price < 20
);
console.log(ropaSyBarata)