/*
1. A partir de la siguiente instrucción que genera un número
aleatorio console.log(Math.round(Math.random()); que genera un
número aleatorio O o 1. Haz una función con return, invocala y
muestra por consola cara si el valor es 1 y cruz si el valor es 0.*/


function lanzarMoneda () {
    const NumAleatorio = Math.round(Math.random());
    if (NumAleatorio === 1) {
        return "Cara";
    } else {
        return "Cruz";
    }
    
}

const resultadoLanzamiento = lanzarMoneda();
console.log(resultadoLanzamiento);
