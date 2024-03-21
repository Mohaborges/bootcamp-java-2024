$(function() {
    $(".card").on({
        mouseenter: function() {
            // Al pasar el cursor sobre la carta, cambia la imagen a la parte frontal
            let frontImage = $(this).data("front");
            $(this).attr("src", frontImage);
        },
        mouseleave: function() {
            // Al retirar el cursor, vuelve a mostrar la parte trasera de la carta
            $(this).attr("src", "img/card-back.png");
        }
    });
});
