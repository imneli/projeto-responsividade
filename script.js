//CRIANDO UM SLIDESHOW AUTOMÁTICO

//declarando as variaveis 

let imagens=['./img/Carro1.jpg','./img/Carro2.jpg','./img/Carrro3.jpg'];
let index=0;
let time=3000;


function slideShow(){

    document.getElementById("imgbanner").src=imagens[index];
    index++;

    if(index == imagens.length){
        index=0;
    }
    setTimeout('slideShow()',time)
}
slideShow();

//CRIANDO O MENU HAMBURGUER

//declarando as variaveis

const btnMobile = document.querySelector("#btnMob")

//criando a função menu

function Menu(){
 //declarando  a variaveil e pegando o id 
 const navBar = document.querySelector("#nav")
 //retorna uma lista ativa
 navBar.classList.toggle("active")  
}

//evento que ao clicar chama a função menu
btnMobile.addEventListener("click", Menu)