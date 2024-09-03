const menu = document.getElementById('menu');
const menuOpenButton = document.getElementById('menu-open');
const menuCloseButton = document.getElementById('menu-close');

menuOpenButton.addEventListener('click', function() {
    menu.style.transform = 'translateX(0)';
});

menuCloseButton.addEventListener('click', function() {
    menu.style.transform = 'translateX(-100%)';
});

document.addEventListener('click', function(event) {
    const target = event.target;
    const isClickInsideMenu = menu.contains(target);
    const isClickOnMenuButton = menuOpenButton.contains(target);

    if (!isClickInsideMenu && !isClickOnMenuButton) {
        menu.style.transform = 'translateX(-100%)';
    }
});