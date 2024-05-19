// Scroll animation
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation");
    } else {
      entry.target.classList.remove("animation");
    }
  });
});

// hero Section animation
const heroTitle = document.querySelector(".hero-title");
observer.observe(heroTitle);

const heroHeader = document.querySelector(".hero-header");
observer.observe(heroHeader);

const heroParagraph = document.querySelector(".hero-paragraph");
observer.observe(heroParagraph);

const heroBtn = document.querySelector(".hero-btn");
observer.observe(heroBtn);

const heroImg1 = document.querySelector(".hero-img1");
observer.observe(heroImg1);

const heroImg2 = document.querySelector(".hero-img2");
observer.observe(heroImg2);

const heroImg3 = document.querySelector(".hero-img3");
observer.observe(heroImg3);

const heroCircle = document.querySelector(".hero-circle");
observer.observe(heroCircle);
// hero section animation end

// Hotel booking section Animation
const BookingTitle = document.querySelector(".booking-title");
observer.observe(BookingTitle)

const BookingHeader = document.querySelector(".booking-header");
observer.observe(BookingHeader)

const BookingCard = document.querySelectorAll(".booking-card");
BookingCard.forEach((card) => observer.observe(card))