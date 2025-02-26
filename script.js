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

document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section.page');
    const navLinks = document.querySelectorAll('.nav-link');
  
    const observerOptions = {
      threshold: 0.6 
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, observerOptions);
  
    sections.forEach(section => observer.observe(section));
  });
  