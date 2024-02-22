// > MAYOR QUE
// < MENOR QUE
// >= MAYOR O IGUAL QUE
// <= MENOR O IGUAL QUE
// == IGUAL QUE (COMPARACION)
// != DISTINTO A
// === ESTRICTAMENTE IGUAL
// !== ESTRICTAMENTE DIFERENTE

// Condicional if
/* if(condicion){
  codigo a ejecutar
} */

const bajaBasura = false;
const limpiaHabitacion = true;

if (bajaBasura || limpiaHabitacion) {
  console.log("Venga, vete al parque");
  console.log("Y no te olvides el bocata");
}

// if y else
const edad = 450;

if (edad >= 18) {
  console.log("Puedes pasar a la discoteca");
} else {
  console.log("Vete a la discoteca light");
}

// else if
if (edad < 12) {
  console.log("Eres un niño");
} else if (edad >= 12 && edad < 18) {
  console.log("Eres adolescente");
} else if (edad >= 18 && edad < 60) {
  console.log("Eres adulto");
} else if (edad >= 60 && edad < 90) {
  console.log("Eres adulto mayor");
} else if (edad >= 90 && edad < 180) {
  console.log("Eres adulto geriatrico");
} else {
  console.log("Eres inmortal");
}

/////////////////////////

const x = 20;
const y = "20";

// == Igual que sin importar el tipo
// === Estrictitamente igual, tiene que coincidir tanto el contenido como el tipo

if (x === y) {
  console.log("Son iguales");
} else {
  console.log("Son diferentes");
}

if (x !== y) {
  console.log("Es estrictamente diferente");
}

// Ternario
const nombre = "Bruce Wayne";

nombre === "Bruce Wayne"
  ? console.log("Es Batman")
  : console.log("No se quien es");

//Switch -> Comparar una variable con estrictamente igual

const nombreReal = "Clark Kent";

switch (nombreReal) {
  case "Clark Kent":
    console.log("Es Superman");
    break;
  case "Bruce Wayne":
    console.log("Es Batman");
    break;
  case "Montse":
    console.log("Es La Interprete");
    break;
  default:
    console.log("No se quien es");
    break;
}