//Recupero input
const userInput = document.querySelector("#userInput");
//Añadimos un escuchador de eventos
userInput.addEventListener("input", (ev) => {
  //Recojo el h2
  const h2 = document.querySelector("h2");
  h2.textContent = ev.target.value;
});
