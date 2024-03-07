//Arrow functions

/* function diHola() {
  console.log("Hola");
} */
/* const diHola = name => "Hola" + name */
const diHola = (name) => {
  return "Hola" + name;
};

diHola();

//Arrow abreviada con retorno implicito
const suma = (numA, numB) => numA + numB;
//Arrow
const suma = (numA,numB) => {
  return numA + numB
}
//Funcion tradicional
function suma(numA, numB) {
  return numA + numB;
}
