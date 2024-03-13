let numero = 1;
let i = 0;
do {
    if(i === 0){
        i++; // Vueltas
        numero--; // Primero lo restamos porque ya es 1 y queremos que muestre primero 0
        console.log(numero); // Primero muestra 0
    } else{
    numero++;
    console.log(numero); 
    }
} while (numero < 5);