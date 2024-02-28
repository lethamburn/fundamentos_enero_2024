//Arrays
const numeros = [1, 2, 3, 4, 5, 6];
const peliculas = [
  "Matrix",
  "Los puentes de Madison",
  "Spiderman",
  "Poor Things",
];

//Longitud -> HUMANO
console.log(peliculas.length);
//Posiciones -> ORDENADOR
console.log(peliculas[0]);
//Para obtener el último elemento de un array
console.log(peliculas[peliculas.length - 1]);

//Métodos que modifican el array original
const alimentos = ["Pan", "Aceite", "Agua", "Galletas"];
console.log(alimentos);
//pop() -> Elimina el último elemento del array
alimentos.pop();
console.log(alimentos);
//push() -> Añade elementos en la última posición del array
alimentos.push("Espinacas");
console.log(alimentos);
//reverse -> Le da la vuelta al array
alimentos.reverse();
console.log(alimentos);
//shift -> Hace lo mismo que el pop pero al principio, es decir, quita la primera posicion
alimentos.shift();
console.log(alimentos);
//sort -> Ordena alfabeticamente
alimentos.sort();
console.log(alimentos);
/* const numbers = [2, 23, 11, 120, 30, 43, 1234, 12, 22, 20, 1];
numbers.sort();
console.log(numbers) */

//unshift -> Mete elementos en la primera posición del array
alimentos.unshift("Aguacate");
console.log(alimentos);

//splice ->
//Primer parametro -> Posicion del elemento donde empiezo a eliminar
//Segundo parametros -> El numero de elementos HUMANOS a eliminar
//Tercer parametro opcional -> Que elementos pongo en su lugar
alimentos.splice(1, 2, "Galletas de Dinosaurio");
console.log(alimentos);

//Métodos que NO modifican el array
const series1 = ["Tokyo Vice", "Naruto", "Los Serrano"];
const series2 = ["Breaking Bad", "Devs", "Juego de Tronos"];
const series = series1.concat(series2);
console.log(series);

//toString() -> Convierte todo el array en un unico string separado por comas sin espacio
console.log(series.toString());
/* "Tokyo Vice,Naruto,Los Serrano,Breaking Bad,Devs,Juego de Tronos" */

//join()
console.log(series.join("___"));

//slice()
const seriesDelMedio = series.slice(2, 4);
console.log(seriesDelMedio);

//Localizar elementos en un array
series.push("Devs");
console.log(series);
//indexOf
console.log(series.indexOf("Devs"));
//lastIndexOf
console.log(series.lastIndexOf("Devs"));
console.log(series.indexOf("Fisica o Quimica"));

//includes
console.log(series.includes("Devs"));
console.log(series.includes("Fisica o Quimica"));

//Curiosidad
const x = "David";
console.log(x[0]);
