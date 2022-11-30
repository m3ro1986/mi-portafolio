const iconoMenu = document.getElementById('icono-menu'), menu = document.getElementById('menu');


function hiddenMenu(){
    menu.classList.toggle('desplegar')
}

iconoMenu.addEventListener('click', hiddenMenu)

