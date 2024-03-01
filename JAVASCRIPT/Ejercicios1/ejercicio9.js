const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

const alumnos = [
  "Jesus",
  "Damaris",
  "Antonio",
  "David",
  "Cintya",
  "Alexandra",
  "Luz",
  "Carlos",
  "Bryce",
];

function findLongestWord(listado) {
  //Creo un string vacio variable para empezar a comparar
  let palabraMasLarga = "";
  //Empiezo a recorrer las palabras
  //Al declarar la función le hemos indicado un parametro llamado listado, que en un futuro cuando ejecutemos la función sera un array de strings. De esta manera esta funcion va a funcionar con cualquier array de strings y es completamente reutilizable
  for (const palabra of listado) {
    //Por cada una de las palabras de mi array voy a comparar si "palabraMasLarga es menor que la nueva", es es mayor la sustituyo y si es menor no hago nada
    if (palabraMasLarga.length < palabra.length) {
      palabraMasLarga = palabra;
    }
  }
  //Muestro la palabra mas larga
  console.log(palabraMasLarga);
}

//Lanzo la función
findLongestWord(avengers)
findLongestWord(alumnos)