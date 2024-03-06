//Recuperamos el botón
const btn = document.querySelector("button");

//Vamos a añadirle un escuchador de eventos
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark")
});
