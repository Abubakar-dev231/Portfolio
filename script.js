window.addEventListener("load", () => {

  const intro = document.getElementById("intro");
  const computer = document.querySelector(".computer");
  const screen = document.querySelector(".screen");
  const main = document.getElementById("main-content");
  const sections = document.querySelectorAll(".fade-section");
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  // ===== INTRO SEQUENCE =====

  setTimeout(() => {
    screen.classList.add("hide-text");
  }, 1500);

  setTimeout(() => {
    computer.classList.add("zoom");
  }, 1400);

  setTimeout(() => {
    intro.style.opacity = "0";
  }, 1500);

  setTimeout(() => {
    intro.style.display = "none";

    // FORCE SHOW MAIN SITE
    main.style.opacity = "1";
    document.body.style.overflowY = "auto";

  }, 2500);

  // ===== SCROLL REVEAL =====
  const reveal = () => {
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", () => {
    reveal();

    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  reveal();

  // ===== MOBILE MENU =====
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

});