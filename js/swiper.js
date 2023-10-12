const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
    },

    spaceBetween: 20,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            centeredSlides: false,
        },
        480: {
            slidesPerView: 2,
        },
        640: {
            slidesPerView: 3,
        },
        991: {
            slidesPerView: "auto",
        }
    }
});
