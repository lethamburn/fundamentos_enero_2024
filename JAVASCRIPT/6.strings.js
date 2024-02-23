//MÉTODOS
//length -> Para averiguar la longitud de un string
//GO TO HELL
const frase = "Andamio";
console.log(frase.length);

//includes -> Averiguar si un texto está dentro de otro
const palabra = "murcielago";
const palabraIncluyeCiela = palabra.includes("ciela");
console.log(palabraIncluyeCiela);

//repeat -> Repite segun el numero indicado
const palabra2 = "patata";
const cincoPatatas = palabra2.repeat(5);
console.log(cincoPatatas);

//replace -> Reemplazar la primera coincidencia
const frase2 = "Hay una frase que dice: simio no mata a simio";
const fraseReemplaza = frase2.replace("simio", "hombre");
console.log(fraseReemplaza);

//replaceAll -> Reeplaza todas las coincidencias de un texto
const fraseAnillos =
  "Un anillo para gobernarlos a todos, un anillo para encontrarlos, un anillo para atraerlos a todos y atarlos en la oscuridad en la Tierra de Mordor donde yacen las Sombras.";
const fraseGatos = fraseAnillos.replaceAll("anillo", "gato");
console.log(fraseGatos);

//toLowerCase y toUpperCase -> Cambia todo a minusculas y a mayusculas
const palabra3 = "Tomate";
console.log(palabra3.toLowerCase());
console.log(palabra3.toUpperCase());

//trim -> Quita los espacios a principio y al final de los strings
const palabraMal = "   Hola buenos dias  ";
console.log(palabraMal.trim());
