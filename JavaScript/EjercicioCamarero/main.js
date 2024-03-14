const dinner = []; 
//Output: []
//Expected output: ['🍔', '🌭']

// Bucle para tomar la comanda del usuario
while (true) {
    //Pedimos una comanda al usuario y la guardamos en una constante.
    const comanda = prompt("Camarero: ¿Qué va a querer para comer? (Escriba 'Esto es todo' para terminar)");
    
    // Verificar si el usuario quiere terminar el pedido
    if (comanda.toLowerCase() === 'esto es todo') {
        alert("Camarero: Comanda tomada, ¡gracias!");
        break; // Salir del bucle si el usuario ha terminado
    }
    const cantidad = prompt("Camarero: ¿Cuántos va a querer?");
    
    //Agregar la comanda multiplicada por la cantidad al array de cena
    for (let i = 0; i < cantidad; i++) {
        dinner.push(comanda)
    }

}

// Mostrar el array completo de la cena
alert("Aquí está su comanda: " + dinner);
