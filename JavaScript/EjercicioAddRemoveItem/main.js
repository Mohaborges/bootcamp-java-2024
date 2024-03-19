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

// Funcion push
function functionPush() {
    const emoji = randomEmoji();
    array.push(emoji);
    mostrarArray.innerHTML = "Array: " + array.join(", ");
}

// Añadir evento al botón push
pushButton.addEventListener("click", functionPush);

