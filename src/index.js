const menu = document.getElementById('menu');
const menuOpenButton = document.getElementById('menu-open');
const menuCloseButton = document.getElementById('menu-close');
const content = document.querySelector('.main-content'); // Основной контент
const header = document.querySelector('.header'); // Хедер сайта
const overlay = document.getElementById('overlay'); // Оверлей

// Функция для открытия меню
function openMenu() {
    menu.style.transform = 'translateX(0)';
    content.classList.add('content-blurred');
    header.classList.add('content-blurred');
    overlay.classList.add('active'); // Включаем оверлей
}

// Функция для закрытия меню
function closeMenu() {
    menu.style.transform = 'translateX(-100%)';
    content.classList.remove('content-blurred');
    header.classList.remove('content-blurred');
    overlay.classList.remove('active'); // Убираем оверлей
}

// Добавляем слушатели на кнопки
menuOpenButton.addEventListener('click', openMenu);
menuCloseButton.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu); // Закрытие при клике на оверлей
