"use strict";
/*1. Crea el juego piedra papel tijera por la consola o por
pantalla (utilizando document.write) del navegador
mediante a iconos.*/
/*enum es una característica en muchos lenguajes de programación que permite definir un conjunto de
constantes con nombres descriptivos. Estas constantes suelen ser valores enteros o cadenas de texto
que representan un conjunto fijo de Manoes relacionadas entre sí. */
// Definición de las Manos del juego
var Manos;
(function (Manos) {
    Manos["Piedra"] = "\u270A";
    Manos["Papel"] = "\uD83E\uDD1A";
    Manos["Tijera"] = "\u270C\uFE0F";
})(Manos || (Manos = {}));
// Función para que el Ordenador seleccione una opción aleatoria
function seleccionarManosOrdenador() {
    const Manoses = [Manos.Piedra, Manos.Papel, Manos.Tijera];
    const indice = Math.floor(Math.random() * Manoses.length);
    return Manoses[indice];
}
// Función para determinar el resultado del juego
function determinarGanador(ManosJugador, ManosOrdenador) {
    if ((ManosJugador === Manos.Piedra && ManosOrdenador === Manos.Tijera) ||
        (ManosJugador === Manos.Papel && ManosOrdenador === Manos.Piedra) ||
        (ManosJugador === Manos.Tijera && ManosOrdenador === Manos.Papel)) {
        return "¡Has ganado!";
    }
    else if (ManosJugador === ManosOrdenador) {
        return "¡Empate!";
    }
    else {
        return "¡Has perdido!";
    }
}
// Función principal para ejecutar el juego
function jugarPiedraPapelTijera(ManosJugador) {
    const ManosOrdenador = seleccionarManosOrdenador();
    const resultado = determinarGanador(ManosJugador, ManosOrdenador);
    // Mostrar los resultados en la pantalla
    document.write(`<h2>Jugador: ${ManosJugador}</h2>`);
    document.write(`<h2>Ordenador: ${ManosOrdenador}</h2>`);
    document.write(`<h2>Resultado: ${resultado}</h2>`);
}
// Ejemplo de uso
const ManosJugador = prompt("Elige ✊, 🤚 o ✌️:");
jugarPiedraPapelTijera(ManosJugador);
