// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function() {
    // Obtén referencia al elemento de la bombilla y al interruptor
    const bombilla = document.getElementById('bombilla') as HTMLImageElement;
    const interruptor = document.getElementById('interruptor') as HTMLImageElement;

    // Agrega un event listener al interruptor para manejar el clic
    interruptor.addEventListener('click', function() {
        // Verifica si la bombilla está apagada
        if (bombilla.src.endsWith('off.jpg')) {
            // Si está apagada, enciéndela cambiando la imagen de la bombilla y del interruptor
            bombilla.src = 'img/on.jpg';
            interruptor.src = 'img/bon.jpg';
        } else {
            // Si está encendida, apágala cambiando la imagen de la bombilla y del interruptor
            bombilla.src = 'img/off.jpg';
            interruptor.src = 'img/boff.jpg';
        }
    });
});
