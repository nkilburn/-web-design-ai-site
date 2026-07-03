console.log("Website is connected.");

document.addEventListener("DOMContentLoaded", () => {
  const navToggles = document.querySelectorAll(".nav-toggle");
  const contactForm = document.querySelector(".contact-form");
  const successMessage = document.querySelector(".success-message");
  const errorMessage = document.querySelector(".error-message");
  const pillButtons = document.querySelectorAll(".pill-button");

  const cursorDot = document.querySelector(".cursor-dot");
  const cursorRing = document.querySelector(".cursor-ring");
  const hoverTargets = document.querySelectorAll(
  "a, .work-card, .pill-button, .nav-toggle, .hero-button, .contact-button"
);



  const revealElements = document.querySelectorAll(
    ".about-section, .works-section, .contact-section, .work-card"
  );
  const scrollQuoteLines = document.querySelectorAll(".quote-line");

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  function updateQuoteScrollProgress() {
    if (!scrollQuoteLines.length) return;

    const windowHeight = window.innerHeight;

    scrollQuoteLines.forEach((line) => {
      const rect = line.getBoundingClientRect();
      const lineDistance = windowHeight - rect.top;
      const totalDistance = windowHeight + rect.height;
      const progress = Math.min(
        100,
        Math.max(0, (lineDistance / totalDistance) * 100)
      );

      line.style.setProperty("--scroll-progress", `${progress}%`);
    });
  }

  window.addEventListener("scroll", updateQuoteScrollProgress, { passive: true });
  window.addEventListener("resize", updateQuoteScrollProgress);
  updateQuoteScrollProgress();

  if (navToggles.length) {
    navToggles.forEach((navToggle) => {
      const siteMenu =
        navToggle.closest(".site-header")?.querySelector(".site-menu") ||
        document.querySelector(".site-menu");

      if (!siteMenu) return;

      navToggle.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = siteMenu.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    });

    document.addEventListener("click", (event) => {
      const isMenuClick = event.target.closest(".site-menu");
      const isToggleClick = event.target.closest(".nav-toggle");

      if (!isMenuClick && !isToggleClick) {
        document
          .querySelectorAll(".site-menu.open")
          .forEach((menu) => menu.classList.remove("open"));

        document
          .querySelectorAll(".nav-toggle[aria-expanded='true']")
          .forEach((toggle) => toggle.setAttribute("aria-expanded", "false"));
      }
    });
  }

  pillButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const group = button.closest(".pill-group");
      if (!group) return;

      const currentlyActive = group.querySelector(".pill-button.active");
      if (currentlyActive && currentlyActive !== button) {
        currentlyActive.classList.remove("active");
      }

      button.classList.add("active");
    });
  });

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (successMessage) {
        successMessage.style.display = "block";
      }

      if (errorMessage) {
        errorMessage.style.display = "none";
      }

      contactForm.reset();
      pillButtons.forEach((button) => button.classList.remove("active"));
    });
  }

  if (cursorDot && cursorRing) {
    document.addEventListener("mousemove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    function animateCursorRing() {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      cursorRing.style.left = `${ringX}px`;
      cursorRing.style.top = `${ringY}px`;

      requestAnimationFrame(animateCursorRing);
    }

    animateCursorRing();

    hoverTargets.forEach((target) => {
      target.addEventListener("mouseenter", () => {
        cursorRing.classList.add("cursor-hover");
      });

      target.addEventListener("mouseleave", () => {
        cursorRing.classList.remove("cursor-hover");
      });
    });
  }

  if (revealElements.length) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealElements.forEach((element) => {
      revealObserver.observe(element);
    });
  }
});
