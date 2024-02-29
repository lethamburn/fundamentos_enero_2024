/* const posicionLuz = alumnos.indexOf("Luz")
console.log(posicionLuz) */
/* const x = 0;
console.log(alumnos[x]) */

for (let i = 0; i < 5; i++) {
  console.log("Hola", i);
  //ARRANCA EL BUCLE
  //i=0, SE CUMPLE, ME LLEVO UNA++
  //Hola 0
  //i=1, SE CUMPLE, ME LLEVO UNA++
  //Hola 1
  //i=2, SE CUMPLE, ME LLEVO UNA++
  //Hola 2
  //i=3, SE CUMPLE, ME LLEVO UNA++
  //Hola 3
  //i=4, SE CUMPLE, ME LLEVO UNA++
  //Hola 4
  //i=5, NO SE CUMPLE, SE ROMPE EL BUCLE
}

//
const alumnos = [
  "Jesús",
  "Damaris",
  "Antonio",
  "David",
  "Pablo",
  "Cintya",
  "Alexandra",
  "Luz",
  "Carlos",
  "Bryce",
  "Montse",
];

for (let i = 0; i < alumnos.length; i++) {
  console.log(alumnos[i], i);
  //Primera vuelta alumnos[0]
  //Segunda vuelta alumnos[1]
}

const numeros = [20, 21, 60, 54, 65, 2, 34, 9, 10, 110];

let contador = 0;

for (let i = 0; i < numeros.length; i++) {
  contador += numeros[i];
}

console.log(contador);

//
const nombres = [
  "Miercoles",
  "Gomez",
  "Morticia",
  "Cosa",
  "Fetido",
  "Pugsley",
  "David",
];

for (let i = 0; i < nombres.length; i++) {
  const nombre = nombres[i];
  console.log(nombre + " Addams");
}

//WHILE
/* const x = 10

while (x === 10) {
  console.log("Hola")
} */
const animales = ["Perro", "Gato", "Loro", "Ornitorrinco", "Mirlo", "Urraca"];

for (const animal of animales) {
  console.log(animal);
}

for (let i = 0; i < animales.length; i++) {
  const animal = animales[i];
  console.log(animal);
}
