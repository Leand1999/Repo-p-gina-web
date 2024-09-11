var slide = 0
var carousel = document.querySelector("#carousel");

function moverCarouse(direccion){
    if(direccion == 0){
        slide--;
    } else if (direccion == 1){
        slide++;
    }
    var newPosition = -(slide * 100) + "%";
    carousel.style.transform = "translate(" + newPosition + ")";
}