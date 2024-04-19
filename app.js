let images = ['img/car1.jpg', 'img/car2.jpg', 'img/car3.jpg'];
let index = 0;
let time = 3000;

function slideShow() {
    document.getElementById("imgbanner").src=images[index];
    index++;

    if (index == images.length) { //let qtd de imgs na array
        index = 0;
    }
    setTimeout('slideShow()', time) //executar uma vez setInterval = intervalos
}

slideShow();