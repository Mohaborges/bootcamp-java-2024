/*
1. Define un array con las letras 'a', 'b', 'c', 'd' y 'e'. Y,
posteriormente, recorre cada uno de los elementos mediante a
forEach
2. Define una variable let numero = 5; que itere hasta que el valor
sea 0. */

const array = ['a', 'b', 'c', 'd', 'e'];

console.log("Recorriendo el array con forEach:");

// Recorrer cada elemento del array utilizando forEach
array.forEach(function(elemento) {
    console.log(elemento);
});

// 2. Define una variable let numero = 5; que itere hasta que el valor
// sea 0.

let numero = 5;

console.log("Define una variable let numero = 5; que itere hasta que el valor sea 0.");

while (numero > 0) {
    console.log(numero);
    numero--;
}
