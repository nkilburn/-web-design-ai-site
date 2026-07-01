console.log("Website is connected.");

const navToggle = document.querySelector(".nav-toggle");
const siteMenu = document.querySelector(".site-menu");
const contactForm = document.querySelector(".contact-form");
const successMessage = document.querySelector(".success-message");
const errorMessage = document.querySelector(".error-message");
const pillButtons = document.querySelectorAll(".pill-button");

if (navToggle && siteMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteMenu.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.addEventListener("click", (event) => {
    if (!siteMenu.contains(event.target) && !navToggle.contains(event.target)) {
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
const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;
let ringX = 0;
let ringY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursorDot.style.left = `${mouseX}px`;
  cursorDot.style.top = `${mouseY}px`;
});

function animateRing() {
  ringX += (mouseX - ringX) * 0.15;
  ringY += (mouseY - ringY) * 0.15;

  cursorRing.style.left = `${ringX}px`;
  cursorRing.style.top = `${ringY}px`;

  requestAnimationFrame(animateRing);
}

animateRing();
