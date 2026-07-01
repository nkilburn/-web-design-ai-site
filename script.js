console.log("Website is connected.");

document.addEventListener("DOMContentLoaded", () => {
  const navToggles = document.querySelectorAll(".nav-toggle");
  const contactForm = document.querySelector(".contact-form");
  const successMessage = document.querySelector(".success-message");
  const errorMessage = document.querySelector(".error-message");
  const pillButtons = document.querySelectorAll(".pill-button");

  if (navToggles.length) {
    navToggles.forEach((navToggle) => {
      const siteMenu = navToggle.closest(".site-header")?.querySelector(".site-menu") || document.querySelector(".site-menu");
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
        document.querySelectorAll(".site-menu.open").forEach((menu) => menu.classList.remove("open"));
        document.querySelectorAll(".nav-toggle[aria-expanded='true']").forEach((toggle) => toggle.setAttribute("aria-expanded", "false"));
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
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (successMessage && errorMessage) {
        successMessage.style.display = "block";
        errorMessage.style.display = "none";
      }

      contactForm.reset();
      pillButtons.forEach((button) => button.classList.remove("active"));
    });
  }
});
