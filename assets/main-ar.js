"use strict";

let navLinks = document.querySelectorAll(".navbar .nav-item");

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", function () {
    for (let navItem of navLinks) {
      navItem.classList.remove("active");
      navLink.classList.add("active");
    }
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    rtl: true,
    loop: true,
    margin: 20,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
      },
    },
  });
});
