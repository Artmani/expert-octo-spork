if (window.innerWidth < 768) {
    document.addEventListener("DOMContentLoaded", function () {
        const swiper = new Swiper(".mySwiper", {
            slidesPerView: "auto",
            spaceBetween: 16,
            slidesOffsetBefore: 16,
            slidesOffsetAfter: 16,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    });
}
if (window.innerWidth > 767) {

    document.addEventListener("DOMContentLoaded", function () {
        const toggleButton = document.querySelector('.services__link-button');
        const toggleButtonText = toggleButton.querySelector('.services__link-text');
        const slides = document.querySelectorAll('.swiper-slide');
        let isExpanded = false;

        // Скрываем лишние слайды по умолчанию (например, оставляем первые 4)
        const toggleSlides = (showAll) => {
            slides.forEach((slide, index) => {
                if (index >= 4) {
                    slide.style.display = showAll ? 'flex' : 'none';
                }
            });
        };

        toggleSlides(isExpanded);

        toggleButton.addEventListener('click', function () {
            isExpanded = !isExpanded;
            toggleSlides(isExpanded);
            toggleButtonText.innerText = isExpanded ? 'Скрыть' : 'Показать все';
            toggleButton.classList.toggle('expanded', isExpanded);
        });
    });

}