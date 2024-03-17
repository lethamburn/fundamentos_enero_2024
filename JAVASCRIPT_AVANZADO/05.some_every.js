const lista = ["perro", "perro", "perro", "perro", "gato", "perro"];

const todosPerros = lista.every((elemento) => elemento === "perro");
console.log(todosPerros)

const algunosPerros = lista.some((elemento) => elemento === "perro");
console.log(algunosPerros)