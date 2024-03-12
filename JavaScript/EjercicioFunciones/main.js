/*
1. Crea una función arrow function que retorne tu nombre y tus
apellidos e imprimelos por pantalla desde fuera de la función
2. Crea una función con nombre y sin return. Pásale un tipo de dato
boolean y dentro de la función imprime el valor el valor que hemos
pasado por los parámetros.
3. Crea una función que reciba parámetros infinitos, haz la llamada
con los valores 1,2,3,4,5 y muestra dichos mediante un forEach.*/

// 1. función Arrow que retorna nombre y apellidos
const miNombreCompleto = () => {
    return "Mohammed Kebdani Ghazi";
};

// Imprimir nombre y apellidos desde fuera de la función
console.log(miNombreCompleto());

// 2. Función con nombre y sin return
function imprimirBooleano(valor) {
    console.log("El valor booleano es: " + valor);
}

// Llamada a la función con un valor booleano
imprimirBooleano(true);

// 3. Función que recibe parámetros infinitos y usa forEach
function mostrarValoresInfinitos(...valores) {
    valores.forEach(valor => console.log(valor));
}

// Llamada a la función con valores 1, 2, 3, 4, 5
mostrarValoresInfinitos(1, 2, 3, 4, 5);
