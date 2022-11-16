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

let palabra =
  "si los monitos son tan lindos como tu entonces amaria trabajar en el sologico";
function recorte(string, num) {
  let acumulador = [];
  for (let i = 0; i < string.length; i++) {
    acumulador += string[i];
    if (acumulador.length === num) {
      return acumulador;
    }
  }
}
// console.log(
//   recorte(palabra,20)
// );

// -Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.miFumcion('Hola que tal ',''); devolverá ['Hola', 'que', 'tal',].

// -Programa una función que repita un texto X veces, pe.miFuncion('Hola Mundo', 3); devolvera  Hola Mundo Hola Mundo Hola Mundo.
