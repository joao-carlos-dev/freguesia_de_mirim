let swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            navigation: false,
            slidesPerGroup: 1,
        },
        800: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3
        }
    }
});
