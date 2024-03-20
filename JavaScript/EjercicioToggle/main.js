// 1. Mediante a jQuery haz un botón que mediante a un
// toggle que cambie el texto de un párrafo al color rojo.

$(document).ready(function(){
    $("#toggleButtonRojo").click(function(){
        $("#parrafo").toggleClass("background-rojo");
        $("#parrafo").removeClass("background-azul");
    });
});

// 2. Mediante a JS haz otro botón que mediante a un
// toggle el color de un párrafo a azul.

document.addEventListener("DOMContentLoaded", function() {
    var toggleButtonAzul = document.getElementById("toggleButtonAzul");
    var parrafo = document.getElementById("parrafo");

    toggleButtonAzul.addEventListener("click", function() {
        parrafo.classList.toggle("background-azul");
        parrafo.classList.remove("background-rojo");
    });
});
