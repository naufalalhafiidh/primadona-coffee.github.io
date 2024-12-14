const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  // When burger is clicked
  burger.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent click event from propagating to document
    // Toggle Nav
    nav.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });

    // Burger Animate
    burger.classList.toggle("toggle");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      // Close the nav if the click is outside of the nav or burger
      if (nav.classList.contains("nav-active")) {
        nav.classList.remove("nav-active");

        // Reset animations
        navLinks.forEach((link) => {
          link.style.animation = "";
        });

        // Burger reset
        burger.classList.remove("toggle");
      }
    }
  });

  // Prevent clicks inside the nav or burger from closing the menu
  nav.addEventListener("click", (e) => {
    e.stopPropagation();
  });
};

navSlide();
