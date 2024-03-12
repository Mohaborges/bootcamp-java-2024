/*
Define un tipo de dato de cada uno de los tipos de datos que
hemos visto.
1. Declara la variable, y posteriormente inicializala.
2. Imprime por consola el valor que tiene la variable por consola
3. Posteriormente imprime además el tipo de dato que almacena
por consola.
4. Declara una variable con scope local y global.
*/

// Number
let edad;
edad = 26;
console.log(edad);               // salida: 26
console.log(typeof edad);        // salida: number

// String
let nombre = "Moha";
console.log(nombre);             // salida: Moha
console.log(typeof nombre);      // salida: string

// Boolean (Booleano)
let esMayorDeEdad = true;
console.log(esMayorDeEdad);      // salida: true
console.log(typeof esMayorDeEdad);// salida: boolean

// Object (Objeto)
let persona = {
    nombre: "Moha",
    edad: 26,
    ciudad: "Les borges del camp"
};
console.log(persona);            // salida: { nombre: 'Moha', edad: 26, ciudad: 'Les borges del camp' }
console.log(typeof persona);     // salida: object

// Array (Arreglo)
let colores = ["rojo", "verde", "azul"];
console.log(colores);            // salida: [ 'rojo', 'verde', 'azul' ]
console.log(Array.isArray(colores)); // salida: true

// Null (Nulo)
let valorNulo = null;
console.log(valorNulo);          // salida: null
console.log(typeof valorNulo);   // salida: object

// Undefined (Indefinido)
let variableIndefinida;
console.log(variableIndefinida); // salida: undefined
console.log(typeof variableIndefinida); // salida: undefined

// Symbol (Símbolo)
const simbolo1 = Symbol('descripcion');
console.log(simbolo1);           // salida: Symbol(descripcion)
console.log(typeof simbolo1);    // salida: symbol

// Variable con scope local y global
let variableLocal = "variable local"; // Variable con scope local
variableGlobal = "variable global";   // Variable con scope global

console.log(variableLocal);    // salida: variable local
console.log(variableGlobal);   // salida: variable global
