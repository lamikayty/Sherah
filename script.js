document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if (name && email) {
      document.getElementById(
        "response-message"
      ).textContent = `Thank you, ${name}! You've successfully signed up to support Sherah Outreach.`;
      document.getElementById("signup-form").reset();
    }
  });

// Lightbox functionality
function openLightbox(img) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

let slideIndex = 1;
showSlide(slideIndex);

// Next/Previous Controls
function changeSlide(n) {
  showSlide((slideIndex += n));
}

// Dot Navigation
function setSlide(n) {
  showSlide((slideIndex = n));
}

// Show Slide Function
function showSlide(n) {
  let slides = document.querySelectorAll(".slide");
  let dots = document.querySelectorAll(".dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((slide) => (slide.style.display = "none"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");
}

// Auto Slide Every 5 Seconds
setInterval(() => {
  changeSlide(1);
}, 5000);
