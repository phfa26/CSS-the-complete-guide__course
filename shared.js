var backdrop = document.querySelector(".backdrop");
var selectPlanButton = document.querySelectorAll(".plan button");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta");

// console.dir(backdrop);

for (var i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", function() {
    // backdrop.style.display = "block";
    // modal.style.display = "block";
    // modal.className //this will overwrite the actual class list completely. PROBLY NOT WHAT YOU WANNA DO.
    modal.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function() {
      backdrop.classList.add("open");
    }, 10);
  });
}

backdrop.addEventListener("click", function() {
  //   mobileNav.style.display = "none";
  mobileNav.classList.remove("open");
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

function closeModal() {
  //   backdrop.style.display = "none";
  //   modal.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  backdrop.classList.remove("open");
  setTimeout(function() {
    backdrop.style.display = "none";
  }, 3000);
}

toggleButton.addEventListener("click", function() {
  //   backdrop.style.display = "block";
  //   mobileNav.style.display = "block";
  mobileNav.classList.add("open");

  backdrop.style.display = "block";
  setTimeout(function() {
    backdrop.classList.add("open");
  }, 10);
});

ctaButton.addEventListener("animationstart", function(event) {
  console.log("Animation started.", event);
});

ctaButton.addEventListener("animationend", function(event) {
  console.log("Animation ended.", event);
});
ctaButton.addEventListener("animationiteration", function(event) {
  console.log("Animation iterated.", event);
});
