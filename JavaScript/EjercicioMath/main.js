/*
1. Investiga como crear un número aleatorio (0 o 1) con el método
random de Math.
2. Investiga como redondear el valor de Math.Pl 3,1415... a la parte
decimal 3. */

// Generar un número aleatorio entre 0 y 1
let numAleatorio = Math.random();

// Redondear el número para obtener 0 o 1
let result = Math.round(numAleatorio);

console.log(result);

let PI = Math.PI; // Obtener el valor de PI

// Redondear el valor de PI a 3 decimales
let PIRedondeado = parseFloat(PI.toFixed(0));

console.log(PIRedondeado); // Imprimir el valor redondeado de PI

