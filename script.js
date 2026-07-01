console.log("Website is connected.");

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const siteMenu = document.querySelector(".site-menu");
  const contactForm = document.querySelector(".contact-form");
  const successMessage = document.querySelector(".success-message");
  const errorMessage = document.querySelector(".error-message");
  const pillButtons = document.querySelectorAll(".pill-button");

  if (navToggle && siteMenu) {
    navToggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const isOpen = siteMenu.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    document.addEventListener("click", (event) => {
      const isMenuClick = event.target.closest(".site-menu");
      const isToggleClick = event.target.closest(".nav-toggle");

      if (!isMenuClick && !isToggleClick) {
        siteMenu.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
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
