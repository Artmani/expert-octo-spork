const menu = document.getElementById('menu');
const menuOpenButton = document.getElementById('menu-open');
const menuCloseButton = document.getElementById('menu-close');

menuOpenButton.addEventListener('click', function() {
    menu.style.transform = 'translateX(0)';
});

menuCloseButton.addEventListener('click', function() {
    menu.style.transform = 'translateX(-100%)';
});
