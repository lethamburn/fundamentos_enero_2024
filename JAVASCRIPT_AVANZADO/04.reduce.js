const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//Reduce tiene dos argumentos, el acumulador que seria nuestro contador, y el numero que seria el elemento individual del bucle.
//El acumulador se inicializa al final del todo despues de una ccoma
const total = numeros.reduce((acc, numero) => acc + numero, 0);
console.log(total);

const personas = [
  {
    nombre: "Ana",
    edad: 23,
  },
  {
    nombre: "Juan",
    edad: 35,
  },
  {
    nombre: "María",
    edad: 18,
  },
  {
    nombre: "Pedro",
    edad: 42,
  },
  {
    nombre: "Isabel",
    edad: 28,
  },
  {
    nombre: "David",
    edad: 30,
  },
  {
    nombre: "Laura",
    edad: 21,
  },
  {
    nombre: "Francisco",
    edad: 50,
  },
  {
    nombre: "Marta",
    edad: 38,
  },
  {
    nombre: "Javier",
    edad: 25,
  },
];

const totalEdad = personas.reduce((acc, persona) => acc + persona.edad, 0);
const mediaEdad = totalEdad / personas.length;
console.log(mediaEdad)