document.addEventListener("DOMContentLoaded", () => {
    const navWrapper = document.querySelector(".nav-wrapper");
    const navLinks = document.querySelectorAll(".nav-link");
    const burgerMenu = document.querySelector(".burger-menu");
    const closeMenu = document.querySelector(".close-menu");

    burgerMenu.addEventListener("click", () => {
        navWrapper.classList.add("open");
    });

    closeMenu.addEventListener("click", () => {
        navWrapper.classList.remove("open");
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navWrapper.classList.remove("open");
        });
    });
});
