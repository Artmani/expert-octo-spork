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


// Получаем элементы для модального окна
const modal1 = document.getElementById('modal1');
const modal1OpenButton = document.getElementById('modal1-open');
const modal1CloseButton = document.getElementById('modal1-close');
const overlayModal1 = document.getElementById('overlay-modal1');
const headerModal1OpenButton = document.getElementById('feedback-form');


// Функция для открытия модального окна
function openModal1() {
    modal1.style.transform = 'translateX(0)';
    menu.classList.add('content-blurred');
    content.classList.add('content-blurred');
    header.classList.add('content-blurred');
    overlayModal1.classList.add('active'); // Включаем оверлей
}

// Функция для закрытия модального окна
function closeModal1() {
    modal1.style.transform = 'translateX(100%)';
    menu.classList.remove('content-blurred');
    content.classList.remove('content-blurred');
    header.classList.remove('content-blurred');
    overlayModal1.classList.remove('active'); // Убираем оверлей
}

// Добавляем слушатели на кнопки открытия и закрытия формы
modal1OpenButton.addEventListener('click', openModal1);
modal1CloseButton.addEventListener('click', closeModal1);
headerModal1OpenButton.addEventListener('click', openModal1);
overlayModal1.addEventListener('click', closeModal1); // Закрытие при клике на оверлей


// Получаем элементы для модального окна
const modal2 = document.getElementById('modal2');
const modal2OpenButton = document.getElementById('modal2-open');
const modal2CloseButton = document.getElementById('modal2-close');
const overlayModal2 = document.getElementById('overlay-modal2');
const headerModal2OpenButton = document.getElementById('call-form');


// Функция для открытия модального окна
function openModal2() {
    modal2.style.transform = 'translateX(0)';
    menu.classList.add('content-blurred');
    content.classList.add('content-blurred');
    header.classList.add('content-blurred');
    overlayModal2.classList.add('active'); // Включаем оверлей
}

// Функция для закрытия модального окна
function closeModal2() {
    modal2.style.transform = 'translateX(100%)';
    menu.classList.remove('content-blurred');
    content.classList.remove('content-blurred');
    header.classList.remove('content-blurred');
    overlayModal2.classList.remove('active'); // Убираем оверлей
}

// Добавляем слушатели на кнопки открытия и закрытия формы
modal2OpenButton.addEventListener('click', openModal2);
modal2CloseButton.addEventListener('click', closeModal2);
headerModal2OpenButton.addEventListener('click', openModal2);
overlayModal2.addEventListener('click', closeModal2); // Закрытие при клике на оверлей
