/*
1. Realiza un switch case que muestre el mes del año cuando lo
introduzcamos en formato numérico (1 al 12)
2. Realiza un switch case en el que puedas introducir un número
del uno al cinco en un string y lo transforme a un número*/


// 1. Realiza un switch case que muestre el mes del año cuando lo
// introduzcamos en formato numérico (1 al 12)

let mes = prompt("Por favor, ingresa el mes del año en formato numérico (1 al 12):");

switch (mes) {
    case "1":
        alert("Enero");
        break;
    case "2":
        alert("Febrero");
        break;
    case "3":
        alert("Marzo");
        break;
    case "4":
        alert("Abril");
        break;
    case "5":
        alert("Mayo");
        break;
    case "6":
        alert("Junio");
        break;
    case "7":
        alert("Julio");
        break;
    case "8":
        alert("Agosto");
        break;
    case "9":
        alert("Septiembre");
        break;
    case "10":
        alert("Octubre");
        break;
    case "11":
        alert("Noviembre");
        break;
    case "12":
        alert("Diciembre");
        break;
    default:
        alert("El número introducido es incorrecto!");
        break;
}

// 2. Realiza un switch case en el que puedas introducir un número
// del uno al cinco en un string y lo transforme a un número

let texto = prompt("Por favor, ingresa un número del (1 al 5):");

function convertirNumero(texto) {
    let numero = texto;
    switch (texto) {
        case "uno": case "1":
            numero = 1;
            break;
        case "dos": case "2":
            numero = 2;
            break;
        case "tres": case "3":
            numero = 3;
            break;
        case "cuatro": case "4":
            numero = 4;
            break;
        case "cinco": case "5":
            numero = 5;
            break;
        default:
            alert("El número introducido no es válido.");
            break;
    }
    //Mostrar una alerta con el número.
    alert("El número es: " + numero);
}

convertirNumero(texto); // Llamando a la función




