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
let palabra = "Cualquier otra cosa que no este tan larga";
function recorte(string, num) {
  let acumulador = [];
  for (let i = 0; i < string.length; i++) {
    acumulador += string[i];
    if (acumulador.length === num) {
      return acumulador;
    }
  }
}
// console.log(recorte(palabra,20));
// -Esta función le insertas un String y te devuelva un Array de textos separados por cierto caracter,  pe.miFumcion ('Hola que tal ',''); devolverá ['Hola', 'que', 'tal',].
function separaTextos(array, caracter) {
  if (caracter) {
    let separado = array.split(" ").join(caracter);
    return separado;
  }
}
// console.log(separaTextos("Me lleva", ". "));
// -Esta función repite un texto X veces, pe.miFuncion('Hola Mundo', 3); devolvera  Hola Mundo Hola Mundo Hola Mundo.
function repetidor(string, veces) {
  let tuna = [];
  for (let i = 0; i < veces; i++) {
    console.log(string);
    tuna.push(string);
    console.log(tuna);
  }
  return tuna;
}
console.log(repetidor("cocobongo", 3));
