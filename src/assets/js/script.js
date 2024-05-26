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

// navbar section starts
const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav__link");

hamburger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});

const NavOpen = document.querySelector(".bi-list");

NavOpen.addEventListener("click", () => {
  NavOpen.classList.toggle("bi-text-indent-right");
});

NavOpen.addEventListener("click", () => {
  navLink.classList.add("NavTran");
});

function checkScroll() {
  var startY = $(".nav-links-section").height() * 2; //The point where the navbar changes in px

  if ($(window).scrollTop() > startY) {
    $(".nav-links-section").addClass("scrolled");
  } else {
    $(".nav-links-section").removeClass("scrolled");
  }
}

if ($(".nav-links-section").length > 0) {
  $(window).on("scroll load resize", function () {
    checkScroll();
  });
}

// navbar section ends

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
observer.observe(BookingTitle);

const BookingHeader = document.querySelector(".booking-header");
observer.observe(BookingHeader);

const BookingCard = document.querySelectorAll(".booking-card");
BookingCard.forEach((card) => observer.observe(card));

// blog section Animation
const BlogTitle = document.querySelector(".blog-title");
observer.observe(BlogTitle);

const BlogHeader = document.querySelector(".blog-header");
observer.observe(BlogHeader);

const BlogCard = document.querySelectorAll(".blog-card");
BlogCard.forEach((card) => observer.observe(card));

// call to action animation

const CTAHeader = document.querySelector(".cta-header");
observer.observe(CTAHeader);

const CTAParagraph = document.querySelector(".cta-paragraph");
observer.observe(CTAParagraph);

const CTABtn = document.querySelector(".cta-btn");
observer.observe(CTABtn);
