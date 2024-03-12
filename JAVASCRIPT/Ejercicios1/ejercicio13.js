const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "sushi",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

const animalesDuplicados = [
  "perro",
  "gato",
  "gato",
  "pato",
  "perro",
  "pato",
  "pez",
  "perro",
  "pollo",
];
function removeDuplicates(param) {
  //Creamos un array vacio
  const unicos = [];
  //Recorremos todos los elementos de param (que en este caso practico es duplicates)
  for (const elemento of param) {
    //Si el array unicos NO incluye el elemento de cada una de las vueltas lo empujo a ese nuevo array
    if (!unicos.includes(elemento)) {
      unicos.push(elemento);
    }
  }
  console.log(unicos);
}
//Le mandamos el array duplicates para tome el lugar de param
removeDuplicates(duplicates);
removeDuplicates(animalesDuplicados)