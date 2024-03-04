//Métodos para acceder a los elementos de documento

//Para acceder a UNO mediante etiqueta, clase o id
const title = document.querySelector("h1");
console.log(title);
const parrafoPorID = document.querySelector("#parrafo");
console.log(parrafoPorID);
const parrafoPorClase = document.querySelector(".parra");
console.log(parrafoPorClase);
//Obtener varios elementos de HTML
const lis = document.querySelectorAll("li");
console.log(lis);

//Document
console.log(navigator);

//Metodo para averiguar etiquetas padre
const ul = document.querySelector("ul");
const padreUL = ul.parentNode;
console.log(padreUL)
const hijosUL = ul.childNodes;
console.log(hijosUL)

//Recupero el h3
const h3 = document.querySelector("h3");
//Puedo eliminar un nodo
h3.remove()