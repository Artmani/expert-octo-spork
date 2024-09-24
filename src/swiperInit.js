document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth < 768) {
        // Инициализация Swiper для первого слайдера
        new Swiper(".swiper1", {
            slidesPerView: "auto",
            spaceBetween: 16,
            slidesOffsetBefore: 16,
            slidesOffsetAfter: 16,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        // Инициализация Swiper для второго слайдера
        new Swiper(".swiper2", {
            slidesPerView: "auto",
            spaceBetween: 16,
            slidesOffsetBefore: 16,
            slidesOffsetAfter: 16,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        // Инициализация Swiper для третьего слайдера
        new Swiper(".swiper3", {
            slidesPerView: "auto",
            spaceBetween: 16,
            slidesOffsetBefore: 16,
            slidesOffsetAfter: 16,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }

    if (window.innerWidth > 767) {
        const toggleButton1 = document.querySelector('.swiper1 .swiper__link-button');
        const toggleButtonText1 = toggleButton1.querySelector('.swiper__link-text');
        const slides1 = document.querySelectorAll('.swiper1 .swiper-slide');
        let isExpanded1 = false;

        const toggleSlides1 = (showAll) => {
            slides1.forEach((slide, index) => {
                if (index >= 3) {
                    slide.style.display = showAll ? 'flex' : 'none';
                }
            });
        };

        toggleSlides1(isExpanded1);

        toggleButton1.addEventListener('click', function () {
            isExpanded1 = !isExpanded1;
            toggleSlides1(isExpanded1);
            toggleButtonText1.innerText = isExpanded1 ? 'Скрыть' : 'Показать все';
            toggleButton1.classList.toggle('expanded', isExpanded1);
        });

        const toggleButton2 = document.querySelector('.swiper2 .swiper__link-button');
        const toggleButtonText2 = toggleButton2.querySelector('.swiper__link-text');
        const slides2 = document.querySelectorAll('.swiper2 .swiper-slide');
        let isExpanded2 = false;

        const toggleSlides2 = (showAll) => {
            slides2.forEach((slide, index) => {
                if (index >= 3) {
                    slide.style.display = showAll ? 'flex' : 'none';
                }
            });
        };

        toggleSlides2(isExpanded2);

        toggleButton2.addEventListener('click', function () {
            isExpanded2 = !isExpanded2;
            toggleSlides2(isExpanded2);
            toggleButtonText2.innerText = isExpanded2 ? 'Скрыть' : 'Показать все';
            toggleButton2.classList.toggle('expanded', isExpanded2);
        });

    }
});
