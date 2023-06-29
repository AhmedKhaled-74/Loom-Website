const navMenu1 = document.querySelector(".nav-menu-1");
const navMenu2 = document.querySelector(".nav-menu-2");
const navMenu3 = document.querySelector(".nav-menu-3");
const navMenu4 = document.querySelector(".nav-menu-4");
const bgo = document.querySelector(".bgo");

navMenu1.addEventListener("mouseover", () => {
  navMenu1.classList.add("active");
  navMenu2.classList.remove("active");
  navMenu3.classList.remove("active");
  navMenu4.classList.remove("active");
});

navMenu2.addEventListener("mouseover", () => {
  navMenu2.classList.add("active");
  navMenu1.classList.remove("active");
  navMenu3.classList.remove("active");
  navMenu4.classList.remove("active");
});
navMenu3.addEventListener("mouseover", () => {
  navMenu3.classList.add("active");
  navMenu1.classList.remove("active");
  navMenu2.classList.remove("active");
  navMenu4.classList.remove("active");
});
navMenu4.addEventListener("mouseover", () => {
  navMenu4.classList.add("active");
  navMenu1.classList.remove("active");
  navMenu2.classList.remove("active");
  navMenu3.classList.remove("active");
});

/********************/

const navMenus = Array.from(document.querySelectorAll(".nav-menu"));

navMenus.forEach((menu) => {
  menu.addEventListener("mouseenter", () => {
    bgo.style.pointerEvents = "all";
    bgo.style.visibility = "visible";
  });

  menu.addEventListener("mouseleave", () => {
    setTimeout(() => {
      if (
        !navMenus.some((menu) => menu.matches(":hover")) &&
        !bgo.matches(":hover")
      ) {
        bgo.style.pointerEvents = "none";
        bgo.style.visibility = "hidden";
      }
    }, 50);
  });
});

bgo.addEventListener("mouseenter", () => {
  bgo.style.pointerEvents = "all";
  bgo.style.visibility = "visible";
});

bgo.addEventListener("mouseleave", () => {
  setTimeout(() => {
    if (
      !navMenus.some((menu) => menu.matches(":hover")) &&
      !bgo.matches(":hover")
    ) {
      bgo.style.pointerEvents = "none";
      bgo.style.visibility = "hidden";
    }
  }, 50);
});

const navCtaMob = document.querySelector(".nav-cta-list");
const navMenuMob = document.querySelector(".nav-mob-menu");
const navBtn = document.querySelector(".navbar-toggler");
const body = document.querySelector("body");
navBtn.addEventListener("click", () => {
  navBtn.classList.toggle("open-nav");
  body.classList.toggle("overflow-hidden");
  navBtn.classList.toggle("bg-brand");
  navBtn.classList.toggle("text-lightBrand");
  navBtn.classList.toggle("bg-veryLightBrand");
  navBtn.classList.toggle("text-brand");
  navCtaMob.classList.toggle("-translate-x-[1.05rem]");
  navMenuMob.classList.toggle("overflow-y-hidden");
  navMenuMob.classList.toggle("overflow-y-auto");
});

/********/
const btnMenuLink = Array.from(document.querySelectorAll(".btnmenu-link"));
btnMenuLink.forEach((link) => {
  link.addEventListener("click", () => {
    navBtn.click();
  });
});
/************/

const accordion = document.querySelector(".accordion");

function setAccordionHeight() {
  const windowHeight = window.innerHeight;
  const headerHeight = document.querySelector("header").offsetHeight;
  const accordionHeight = windowHeight - headerHeight; // 7.5rem = 7.5 * 16px (default font size)
  accordion.style.maxHeight = `${accordionHeight}px`;
}

// Call setAccordionHeight when the page is loaded and when the window is resized
window.addEventListener("DOMContentLoaded", setAccordionHeight);
window.addEventListener("resize", setAccordionHeight);

/******************/
const Header = document.querySelector(".main-header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    Header.classList.add("shadow-xl");
  } else {
    Header.classList.remove("shadow-xl");
  }
});
/***************/

const navBtnMob = Array.from(document.querySelectorAll(".list-btn-mob"));

navBtnMob.forEach((btn) => {
  const arrowIcon = btn.querySelector(".fa-caret-down");
  let isExpanded = false;

  btn.addEventListener("click", () => {
    isExpanded = !isExpanded;
    arrowIcon.classList.toggle("fa-caret-down", !isExpanded);
    arrowIcon.classList.toggle("fa-caret-up", isExpanded);
  });
});
/*****************/
/*****Featured-in*****/
const brands = document.querySelector(".featured-in-slide-1"),
  totalBrands = brands.children.length;
document.documentElement.style.setProperty("--total-logos", totalBrands);
for (let i = 0; i < totalBrands; i++) {
  brands.appendChild(brands.children[i].cloneNode(true));
}
/*****************/
/*****Animation******/
const videoElem = document.querySelector(".vd-p"); // select the video element

function autoplayVideo() {
  if (!videoElem.paused) {
    videoElem.pause(); // pause the video if it's playing
    setTimeout(() => {
      videoElem.play(); // play the video after 3 seconds
    }, 2900);
  } else {
    videoElem.play(); // play the video if it's paused
    setTimeout(() => {
      videoElem.pause(); // pause the video after 2 seconds
    }, 2100);
  }
}

setTimeout(() => {
  autoplayVideo(); // call the function after a delay of 3 seconds
}, 3000);

setInterval(autoplayVideo, 5000); // call the function every 5 seconds

/********************/
/********testimonials********/

const prevBtn = document.querySelector(".prev-button");
const nextBtn = document.querySelector(".next-button");
const carouselItems = document.querySelector(".carousel-container");

nextBtn.addEventListener("click", () => {
  if (
    carouselItems.classList.contains("-translate-x-full") &&
    carouselItems.classList.contains("md:-translate-x-[60%]")
  ) {
    carouselItems.classList.remove(
      "-translate-x-full",
      "md:-translate-x-[60%]"
    );
    carouselItems.classList.add("translate-x-full", "md:translate-x-[60%]");
  } else if (
    carouselItems.classList.contains("translate-x-full") &&
    carouselItems.classList.contains("md:translate-x-[60%]")
  ) {
    carouselItems.classList.remove("translate-x-full", "md:translate-x-[60%]");
    carouselItems.classList.add("translate-x-0");
  } else if (carouselItems.classList.contains("translate-x-0")) {
    carouselItems.classList.remove("translate-x-0");
    carouselItems.classList.add("-translate-x-full", "md:-translate-x-[60%]");
  }
});

prevBtn.addEventListener("click", () => {
  if (
    carouselItems.classList.contains("-translate-x-full") &&
    carouselItems.classList.contains("md:-translate-x-[60%]")
  ) {
    carouselItems.classList.remove(
      "-translate-x-full",
      "md:-translate-x-[60%]"
    );
    carouselItems.classList.add("translate-x-0");
  } else if (
    carouselItems.classList.contains("translate-x-full") &&
    carouselItems.classList.contains("md:translate-x-[60%]")
  ) {
    carouselItems.classList.remove("translate-x-full", "md:translate-x-[60%]");
    carouselItems.classList.add("-translate-x-full", "md:-translate-x-[60%]");
  } else if (carouselItems.classList.contains("translate-x-0")) {
    carouselItems.classList.remove("translate-x-0");
    carouselItems.classList.add("translate-x-full", "md:translate-x-[60%]");
  }
});

/********************/
