function toggletheme() {
    var body = document.body;
    document.body.classList.toggle('light-theme');
    document.body.classList.toggle('dark-theme');
    var themeIcon = document.getElementById('themeIcon');

    if (body.classList.contains('dark-theme')) {
        themeIcon.setAttribute('src', 'moon.svg');
    } 
    else {
        themeIcon.setAttribute('src', 'sun.svg');
    }
    
    var themeIco = document.getElementById('themeIco');
    if (body.classList.contains('dark-theme')) {
        themeIco.setAttribute('src', 'bars_white.svg');
    } 
    else {
        themeIco.setAttribute('src', 'bars_dark.svg');
    }

    var menu = document.getElementById('menu');
    var theme = document.body.classList.contains('dark-theme') ? 'rgb(87, 85, 83)' : 'rgb(255, 228, 196)';
    menu.style.boxShadow = '0px 0px 50px ' + theme;

}
function div() {
    var div = document.getElementById('menu');
    div.classList.toggle('open');
}

function cdiv() {
    var div1 = document.getElementById('menu');
    div1.classList.remove('open');
}

var body = document.body

document.getElementById('toggleThemeButton').addEventListener('click', toggleBackgroundImage);


function openLoginPopup() {
    document.getElementById('login-popup').style.display = 'flex';
}

function closeLoginPopup() {
    document.getElementById('login-popup').style.display = 'none';
}

function openSignPopup() {
    document.getElementById('signup-popup').style.display = 'flex';
}

function closeSignPopup() {
    document.getElementById('signup-popup').style.display = 'none';
}
