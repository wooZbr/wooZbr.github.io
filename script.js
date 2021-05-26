var menuState = 0 // 0 = fechado, 1 = aberto

var radioEmail = document.getElementById('radio-email');
var radioTel = document.getElementById('radio-telefone');

function changePage(page) {
    document.location.href = page;
}

function changeImage(image) {
    const imgBig = document.getElementById("img-big");
    imgBig.src = image;
}

function showMenu(){
    if (menuState == 0) {
        document.getElementById('menu-head-container').style="display: flex;"
        menuState = 1;
    } else {
        document.getElementById('menu-head-container').style="display: none;"
        menuState = 0;
    }
}