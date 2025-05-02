document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("nav");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
    });
  });

  // Prevent horizontal scrolling
  document.body.addEventListener(
    "wheel",
    function (e) {
      if (e.deltaY === 0) return;
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
      }
    },
    { passive: false }
  );
});

// Scroll Animation
document.addEventListener("DOMContentLoaded", function () {
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  function checkScroll() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    portfolioItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;

      if (itemTop < triggerBottom) {
        item.classList.add("show");
      } else {
        // Optional: Remove if you want animation to happen only once
        item.classList.remove("show");
      }
    });
  }

  // Jalankan saat pertama load
  checkScroll();

  // Jalankan saat scroll
  window.addEventListener("scroll", checkScroll);
});
