const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

function averageWord(param) {
  let contador = 0;
  for (const elemento of param) {
    //Con typeof puedo averiguar si un elemento es de un tipo u otro, el tipo irá indicado despues de un estrictamente igual en string
    if (typeof elemento === "number") {
      contador += elemento;
    } else if (typeof elemento === "string") {
      contador += elemento.length;
    }
  }
  console.log(contador);
}

averageWord(mixedElements);
