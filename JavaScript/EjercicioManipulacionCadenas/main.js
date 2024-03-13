/*
1. Crea una función en la que pasándole un string como parámetro
se substituyan las letras A por las O.
2. Crea una función que compruebe si un string pasado como
parámetro empieza por 'aca' y llama dos veces a la función una con
academia y otra con escuela.
3. Crea una función que pasándole un Hola nos salude 3 veces
utilizando métodos de Strings. */

// 1. Crea una función en la que pasándole un string como parámetro
// se substituyan las letras A por las O.

// Crear una variable con el texto que introduce el usuario
let texto1 = prompt("Escribe una frase que contenga la letra A y se modificarán por 0");

// Función que cambia las letras "A" por 0
function substituirApor0(texto1) {
    return texto1.replace("A" && "a", "0");
}

// Guardar en una nueva variable el texto modificado
let textoModificado1 = substituirApor0(texto1);

// Mostrar por pantalla una alerta del texto modificado
alert(textoModificado1);

// 2. Crea una función que compruebe si un string pasado como
// parámetro empieza por 'aca' y llama dos veces a la función una con
// academia y otra con escuela.

// Crear una variable con el texto que introduce el usuario
let texto2 = prompt("Vamos a comprobar si tu palabra empieza por 'aca'");

function comprobarInicio(texto2) {
    return texto2.startsWith('aca');
}

// Guardar en una nueva variable el texto modificado
let textoModificado2 = comprobarInicio(texto1);

// Si empieza por aca mostrar un mensaje sino otro
if (comprobarInicio(texto2)) {
    alert("✅Tu palabra empieza por 'aca'");
} else {
    alert("❌Tu palabra NO empieza por 'aca'");
}

// 3. Crea una función que pasándole un Hola nos salude 3 veces
// utilizando métodos de Strings.

// Función para repetir tres veces el saludo
function saludarTresVeces(saludo) {
    let saludoRepetido = saludo.repeat(3);
    return saludoRepetido;
}

// Creando la variable, guardarla en otra tras pasarla por la función y mostrar un 
// alert con el triple saludo
let saludo = "Hola";
let saludoTriple = saludarTresVeces(saludo);
alert(saludoTriple);
