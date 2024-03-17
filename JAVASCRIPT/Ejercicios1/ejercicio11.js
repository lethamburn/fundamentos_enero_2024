const numbers = [12, 21, 38, 5, 45, 37, 6];
const notas = [4, 5, 4, 6, 3, 8];
const edades = [15, 18, 21, 15, 12, 19, 15, 12];

function average(param) {
  let counter = 0;
  let recuento = param.length;
  for (const number of param) {
    counter += number;
  }
  const promedio = counter / recuento;
  console.log(promedio);
}

average(notas);
average(numbers);
average(edades);
