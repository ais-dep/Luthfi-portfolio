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

document.addEventListener("DOMContentLoaded", function () {
  // Title animation
  const text1 = document.getElementById("text1");
  const text2 = document.getElementById("text2");

  // Show first text initially
  text1.classList.add("active");

  // Toggle between texts every 3 seconds
  setInterval(function () {
    if (text1.classList.contains("active")) {
      text1.classList.remove("active");
      setTimeout(function () {
        text2.classList.add("active");
      }, 800);
    } else {
      text2.classList.remove("active");
      setTimeout(function () {
        text1.classList.add("active");
      }, 800);
    }
  }, 4000);

  // Marquee animation - clone content for smooth looping
  const marqueeContent = document.querySelector(".marquee-content");
  marqueeContent.innerHTML += marqueeContent.innerHTML;
});
