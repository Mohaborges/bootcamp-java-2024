const emojis = ["🎃", "🥊", "🏆", "🎮", "🥐", "🛹", "🏍️", "💈", "🧳"];
const array = []; 

const mostrarArray = document.getElementById("mostrarArray");

//ADD ITEM
const pushButton = document.getElementById("push");
const unshiftButton = document.getElementById("unshift");
const insertButton = document.getElementById("insert");
const inputAddItem = document.getElementById("addItem");


//REMOVE ITEM
const popButton = document.getElementById("pop");
const shiftButton = document.getElementById("shift");
const removeButton = document.getElementById("remove");
const inputRemoveItem = document.getElementById("removeItem");

// Funcion emoji random
function randomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

// Funcion push (Agrega al final del array un emoji aleatorio)
function functionPush() {
    const emoji = randomEmoji();
    array.push(emoji);
    mostrarArray.innerHTML = "Array: " + array.join(", ");
}

// Funcion unshift (Agrega al principio del array un emoji aleatorio)
function functionUnshift() {
    const emoji = randomEmoji();
    array.unshift(emoji);
    mostrarArray.innerHTML = "Array: " + array.join(", ");
}

// Funcion insert at (Elimina el emoji del final del array)
function functionInsertAt() {
    const emoji = randomEmoji();
    array.splice(inputAddItem.value-1, 0, emoji)
    mostrarArray.innerHTML = "Array: " + array.join(", ");
}

// Funcion pop (Elimina el emoji del final del array)
function functionPop() {
    const emoji = randomEmoji();
    array.pop(emoji);
    mostrarArray.innerHTML = "Array: " + array.join(", ");
}

// Funcion shift (Permite eliminar el primer elemento de un array)
function functionShift() {
    const emoji = randomEmoji();
    array.shift(emoji);
    mostrarArray.innerHTML = "Array: " + array.join(", ");
}

// Funcion remove at (Elimina el emoji de la posición que le indicamos)
function functionRemoveAt() {
    const emoji = randomEmoji();
    array.splice(inputRemoveItem.value-1, 1)
    mostrarArray.innerHTML = "Array: " + array.join(", ");
}

// Añadir evento al botón push
pushButton.addEventListener("click", functionPush);

// Añadir evento al botón unshift
unshiftButton.addEventListener("click", functionUnshift);

// Añadir evento al botón pop
popButton.addEventListener("click", functionPop);

// Añadir evento al botón shift
shiftButton.addEventListener("click", functionShift);

// Añadir evento al botón insert at
insertButton.addEventListener("click", functionInsertAt);

// Añadir evento al botón remove at
removeButton.addEventListener("click", functionRemoveAt);
