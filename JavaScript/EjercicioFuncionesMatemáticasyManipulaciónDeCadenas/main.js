/*
1. Crea una función pasa 3 números por parámetros súmalos y
devuelve el resultado mediante a return. Finalmente muéstralos
por pantalla
2. Crea una función y escribe tu nombre completo en 3 parámetros:
nombre, apellido1, apellido2 y concaténalos y finalmente
muéstralos por pantalla
3. Crea una función que acepte dos números y devuelva el número
mayor
*/

// 1. Función que suma 3 números y devuelve el resultado
function sumaTresNumeros(num1, num2, num3) {
    return num1 + num2 + num3;
}

// Sumar tres números y mostrar el resultado
const resultadoSuma = sumaTresNumeros(15, 24, 34);
console.log("La suma de los tres números es: " + resultadoSuma);

// 2. Función que concatena nombre completo
function nombreCompleto(nombre, apellido1, apellido2) {
    return nombre + " " + apellido1 + " " + apellido2;
}

// Concatenar nombre completo y mostrarlo
const nombreCompletoConcatenado = nombreCompleto("Mohammed", "Kebdani", "Ghazi");
console.log("Nombre completo: " + nombreCompletoConcatenado);

// 3. Función que devuelve el número mayor entre dos números
function numeroMayor(num1, num2) {
    
    return Math.max (num1, num2);
}

// Determinar el número mayor y mostrarlo
const mayorNumero = numeroMayor(75, 548);
console.log("El número mayor es: " + mayorNumero);
