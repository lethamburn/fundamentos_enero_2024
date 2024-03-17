const numbers = [1, 2, 3, 5, 45, 37, 58];
const numbers2 = [1, 2, 3];

function sumAll(numArray) {
  //Inicializo un contador variable
  let counter = 0;
  //Recorro lo que sea param una vez lo ejecute y por cada uno de los numeros se lo sumamos al contador dentro del bucle
  for (const number of numArray) {
    counter += number;
  }
  //Una vez terminado el bucle enseñamos qué es counter
  return counter
}

sumAll(numbers);
sumAll(numbers2);
