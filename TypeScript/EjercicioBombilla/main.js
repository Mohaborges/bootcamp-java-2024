"use strict";
document.addEventListener('DOMContentLoaded', function () {
    const bombilla = document.getElementById('bombilla');
    const interruptor = document.getElementById('interruptor');
    interruptor.addEventListener('click', function () {
        if (bombilla.src.endsWith('off.jpg')) {
            bombilla.src = 'img/on.jpg';
            interruptor.src = 'img/bon.jpg';
        }
        else {
            bombilla.src = 'img/off.jpg';
            interruptor.src = 'img/boff.jpg';
        }
    });
});
