/*
1. A partir de la pizza sustituías todos los elemento del array por
cervezas:🍔🌯🍣🍕🍜🍱🍙🍘🥑
2. Encontrar si existe un elemento en el array que sea una piña.
🍕🍕🍍🍕🍕
3. Quita la piña del siguiente array. 🍕🍕🍍🍕🍕
4. A partir del siguiente array 🍓🍋🍓🍋🍓
convierte todas las fresas en 🍄
5. Añade el siguiente icono 🥵 inmediatamente después del cada g
en el siguiente array: 🌶️🥛🌶️🥛🌶️🥛
6. Añade una 🃏 cartas comodín entre medio de dos cartas . Por
ejemplo: 🎴🃏🎴
En el siguiente array: 🎴🎴🎴🃏🎴🎴🎴 */

const array1 = ['🍔', '🌯', '🍣', '🍕', '🍜', '🍱', '🍙', '🍘', '🥑'];
const array2 = ['🍕', '🍕', '🍍', '🍕', '🍕'];
const array3 = ['🍕', '🍕', '🍍', '🍕','🍍','🍕','🍍','🍍'];
const array4 = ['🍓', '🍋', '🍓', '🍋', '🍓'];
const array5 = ['🌶️', '🥛', '🌶️', '🥛', '🌶️', '🥛'];
const array6 = ['🎴', '🎴', '🎴', '🃏', '🎴', '🎴', '🎴'];

console.log("Sustitución de todos los elemento del array por 🍺");

// Encontrar el índice del emoji de la pizza
let indicePizza = array1.indexOf('🍕');

// Verificar si el emoji de la pizza está en el array
if (array1.includes('🍕')) {
    // Usar fill() para cambiar los elementos a partir del emoji de la pizza
    array1.fill('🍺', indicePizza);

    console.log(array1);
}

console.log("Encontrar si existe un elemento en el array que sea una 🍍");

if (array2.includes('🍍')) {
    console.log("Si que contiene la 🍍");
} else {
    console.log("NO contiene la 🍍");
}

console.log("Quita la piña del siguiente array:" + array3);

if (array2.includes('🍍')) {
    console.log(array3.filter(item => item != '🍍'));
} else {
    console.log("NO contiene una 🍍!");
}

console.log("A partir del siguiente array: " + array4 + " y convierte todas las 🍓 en 🍄");

if (array4.includes('🍓')) {
    // Utilizar map() para crear un nuevo array con las fresas convertidas en setas
    let arrayModificado = array4.map(function(elemento) {
        if (elemento === '🍓') {
            return '🍄'; // Convertir fresa en seta
        } else {
            return elemento; // Mantener otros elementos sin cambios
        }
    });
    
    console.log(arrayModificado);

} else {
    console.log("No existe ninguna fresa en el array");
}

console.log("Añade el siguiente icono 🥵 inmediatamente después del cada 🌶️ en el siguiente array: " + array5);

const newArray5 = array5.map(item => { // Recorremos el array5 y lo guardamos en un nuevo array 
    if (item === '🥛') {
        return item; // Si el elemento es 🥛, no se modifica
    } else {
        if (item === '🌶️') { // Si el elemento es 🌶️
            return item + '🥵'; // Se añade 🥵 después
        } else {
            return item; // Si no es 🌶️, el elemento permanece igual
        }
    }
});

console.log(newArray5);

console.log("Añade una 🃏 entre medio de dos cartas. En el siguiente array: " + array6);

const newArray6 = [];

array6.forEach((icono, index) => {
    newArray6.push(icono); // Agregamos la carta actual al nuevo array
    
    // Verificamos si la carta actual y la siguiente son '🎴'
    if (icono === '🎴' && array6[index + 1] === '🎴') {
        newArray6.push('🃏'); // Si es así, agregamos la carta comodín
    }
});

console.log(newArray6);

