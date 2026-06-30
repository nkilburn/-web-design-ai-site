console.log("Website is connected.");

const contactForm = document.querySelector(".contact-form");
const successMessage = document.querySelector(".success-message");
const errorMessage = document.querySelector(".error-message");
const pillButtons = document.querySelectorAll(".pill-button");

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
