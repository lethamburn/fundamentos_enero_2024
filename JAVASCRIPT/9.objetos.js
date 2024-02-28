//Objetos
const dune = {
  titulo: "Dune: Parte 2",
  director: "Denis Villeneuve",
  año: 2024,
  estrenada: false,
  reparto: ["Rebecca Ferguson", "Timote Chalamet"],
  fotografia: "Greg Fraser",
};
//Acceder a las propiedades
const directorDeDune = dune.director;
console.log(directorDeDune);
const fotografiaDune = dune["fotografia"];
console.log(fotografiaDune);

//Si no existe una clave, la crea y le asigna el valor
dune.duracion = 166;
console.log(dune);

//Si accedemos a una clave que ya existe y le modificamos el valor, se modifica en el objeto
dune.estrenada = true;
console.log(dune);

//Eliminar una clave
delete dune.estrenada;
console.log(dune);

dune.estrenadaEspaña = false;
dune.estrenadaInternacional = true;
console.log(dune);
