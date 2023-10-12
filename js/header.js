const header = document.getElementById("header");
const open = document.querySelector(".open");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        let targetElement = document.querySelector(this.getAttribute('href'));
        let offset = header.offsetHeight;

        window.scrollTo({
            top: targetElement.offsetTop - offset,
            behavior: 'smooth'
        });
    });
});

open.addEventListener("click", () => {
    header.classList.add("show")
    document.body.style.overflow = "hidden"
})

close.addEventListener("click", () => {
    header.classList.remove("show")
    document.body.style.overflow = "unset"
})

overlay.addEventListener("click", () => {
    header.classList.remove("show")
    document.body.style.overflow = "unset"
})


