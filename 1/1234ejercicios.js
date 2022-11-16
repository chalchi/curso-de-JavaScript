// Esta función cuenta el número de caracteres de una cadena de texto sin contar los espacios. pe.miFuncion('Hola mundo'); devolvera 9.

function separador(string) {
  if (!string) return "No has escrito nada de nada";
  if (string) {
    let split = string.split(" ").join("");
    let cont = 0;
    for (let i of split) {
      cont = cont + 1;
    }
    return cont + " caracteres hay en la palabra " + string + ".";
  }
}

// -Esta función devuelve el texto recortado según el número de caracteres indicados, pe.miFumcion('Hola mundo', 4); devolverá 'Hola'.

let palabra = "Algo";
function recorte(string, num) {
  for (let i = 0; i =; i++){

  }
}