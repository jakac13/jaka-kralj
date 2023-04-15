"use strict";

// HAMBURGER MENU ON MOBILE//
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");
const mobileLink = document.querySelectorAll(".mobile-nav-link");

const openMenu = function () {
  mobileNav.classList.toggle("is-active");
  hamburger.classList.toggle("hamburger-is-active");
};

hamburger.addEventListener("click", openMenu);
hamburger.addEventListener("keydown", function (e) {
  e.key === "Escape" ? openMenu() : null;
});

// MENU WILL CLOSE IF YOU CLICK ON ANY LINK //
for (let i = 0; i < mobileLink.length; i++) {
  mobileLink[i].addEventListener("click", openMenu);
}

// SCROLL TOP BUTTON CODE //
const BtnTop = document.getElementById("btn-top");
window.document.addEventListener("scroll", function (e) {
  document.documentElement.scrollTop >= 300
    ? BtnTop.classList.add("btn-top-active")
    : BtnTop.classList.remove("btn-top-active");
});

// ACTIVE LINK //
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  let scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 400;
    var sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".navigation a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".navigation a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
