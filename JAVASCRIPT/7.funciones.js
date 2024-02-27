//Declaración de una función
function nombreDeLaFuncion() {
  console.log("Esto es lo que hace mi función");
}

//Ejecutar una función
nombreDeLaFuncion();

//

function diHola() {
  console.log("¡Hola!");
}

diHola();
diHola();
diHola();

//

function diHolaConNombre(nombre) {
  console.log("Hola " + nombre);
}

diHolaConNombre("David");
diHolaConNombre("Pepe");

//

function sumar(numA, numB) {
  const total = numA + numB;
  console.log("El total de la suma es: " + total);
}

sumar(45, 10);
sumar(120, 11);
sumar(5, 789);

//

function calcularEdad(nombre, añoNacimiento, añoActual) {
  const edad = añoActual - añoNacimiento;
  console.log(nombre + " tiene " + edad + " años.");
}

calcularEdad("Antonio", 1990, 2024);
calcularEdad("Napoleon", 1769, 1810);

//

function IMC(pesoKG, estaturaMetros) {
  const total = pesoKG / (estaturaMetros * estaturaMetros);
  if (total < 18.5) {
    console.log("Peso bajo");
  } else if (total > 18.5 && total <= 24.99) {
    console.log("Peso normal");
  } else if (total >= 25 && total < 30) {
    console.log("Sobrepeso");
  } else if (total >= 30) {
    console.log("Obesidad");
  } else {
    console.log("No puedo hacer el calculo");
  }
}

IMC(68, 1.78);

//Parámetros con valores por defecto
function calculadoraAños(añoReferencia, añoActual = 2024) {
  const total = añoActual - añoReferencia;
  console.log("Han pasado " + total + " años.");
}

//Aqui estamos pisando los dos parametros
calculadoraAños(1995, 1999);
//Y aqui solo el primero, tomando como referencia que el segundo automaticamente es 2024
calculadoraAños(1990);

//Retorno
function multiplicar(numeroA, numeroB) {
  const total = numeroA * numeroB;
  return total;
}

const cincoPorDos = multiplicar(5, 2);

//MINICALCULADORA
function miniCalculadora(operacion, numA, numB) {
  if (operacion === "+") {
    return numA + numB;
  } else if (operacion === "-") {
    return numA - numB;
  } else if (operacion === "/") {
    return numA / numB;
  } else if (operacion === "*") {
    return numA * numB;
  } else {
    console.log("Operacion no admitida");
  }
}

const x = miniCalculadora("-", 6, 4);
console.log(x);
const y = miniCalculadora("*", 5, 3);
console.log(y);
const megaOperacion = miniCalculadora("/", x, y);
console.log(megaOperacion);
miniCalculadora("Patata", 1, 2)
