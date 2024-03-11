const alumnos = [
  "persona",
  "perro",
  "persona",
  "persona",
  "perro",
  "pato",
  "persona",
];

//El metodo map devuelve un nuevo array de lo que tu quieras
const nuevosAlumnos = alumnos.map((alumno) => "zombie");
console.log(nuevosAlumnos);

const personasZombies = alumnos.map((alumno) =>
  alumno === "persona" ? "zombie" : alumno
);

console.log(personasZombies);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const numerosDobles = numeros.map((num) => num * 2);
console.log(numerosDobles);

const personajes = [
  {
    nombre: "Fulano",
    peso: 9000,
    status: true,
  },
  {
    nombre: "Mengano",
    peso: 7500,
    status: false,
  },
  {
    nombre: "Pepito",
    peso: 2000,
    status: true,
  },
];

const nuevosPersonajes = personajes.map((personaje) => ({
  titulo: personaje.nombre,
  peso: personaje.peso / 100,
  pesoOriginal: personaje.peso,
  vivo: true,
}));
console.log(nuevosPersonajes);
