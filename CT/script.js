"use strict";
const mountain_1_tab = document.querySelector(".tab_1");
const mountain_2_tab = document.querySelector(".tab_2");
const tab_content_1 = document.querySelector(".tab_content_1");
const tab_content_2 = document.querySelector(".tab_content_2");
const image = document.querySelector(".image_container_3");
const hero = document.querySelector(".hero");
const header = document.querySelector(".header");
const midSection = document.querySelector(".mid_section");
const stickyNav = document.querySelector(".sticky_nav");
const history = document.querySelectorAll(".history");
const team = document.querySelectorAll(".team");
const carousel = document.querySelector(".carousel_slider");
const circle = document.querySelectorAll(".circle");
const accordion = document.querySelector(".accordion");
const mobNav = document.querySelector(".mobile_nav");
//////////////////////////=======NAV_BUTTON ==========================//////////////////////

const heroHeight = hero.getBoundingClientRect();

history.forEach((his) => {
  his.addEventListener("click", () => {
    window.scrollTo(0, heroHeight.height - 74);
  });
});

team.forEach((t) =>
  t.addEventListener("click", () => {
    window.scrollTo(0, heroHeight.height * 2 - 75);
  })
);

accordion.addEventListener("click", () => {
  console.log(mobNav.classList.contains("toggle"));
  mobNav.classList.toggle("toggle");
});

if (!mobNav.classList.contains("toggle")) {
  document.querySelector("body").addEventListener("click", () => {
    console.log("click");
    mobNav.classList.toggle("toggle");
  });
}

//////////////////////===========STICKY NAV ===================////////////////////////////////

const obsCallback = (entries) => {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    header.classList.remove("header");
    header.classList.add("sticky_nav");
  } else {
    header.classList.add("header");
    header.classList.remove("sticky_nav");
  }
};

const obsOptions = {
  root: null,
  threshold: 0,
  rootMargin: "-75px",
};

const heroObserver = new IntersectionObserver(obsCallback, obsOptions);

heroObserver.observe(hero);

///////////////////////////////////  CAROUSEL  ///////////////////////////////////////

const imgElement = [
  { id: 1, img: "images/carousel_1.jpg", alt: "yoy" },
  { id: 2, img: "images/carousel_2.jpg", alt: "yoy" },
  { id: 3, img: "images/carousel_1.jpg", alt: "yoy" },
  { id: 4, img: "images/carousel_2.jpg", alt: "yoy" },
  { id: 5, img: "images/carousel_1.jpg", alt: "yoy" },
  { id: 6, img: "images/carousel_2.jpg", alt: "yoy" },
  { id: 7, img: "images/carousel_1.jpg", alt: "yoy" },
  { id: 8, img: "images/carousel_2.jpg", alt: "yoy" },
  { id: 9, img: "images/carousel_1.jpg", alt: "yoy" },
  { id: 10, img: "images/carousel_2.jpg", alt: "yoy" },
  { id: 11, img: "images/carousel_1.jpg", alt: "yoy" },
  { id: 12, img: "images/carousel_2.jpg", alt: "yoy" },
];

const imgDistribution = (imgElement) => {
  imgElement.forEach((el) => {
    const html = `
        <div key="${el.id}" class="carousel_img_container">
            <img src="${el.img}" alt="${el.alt + el.id}" />
        </div>
        `;

    carousel.insertAdjacentHTML("beforeend", html);
  });
};

imgDistribution(imgElement);

const img_container = document.querySelectorAll(".carousel_img_container");

const activateDot = (s) => {
  circle.forEach((dot) => dot.classList.remove("dot_active"));
  if (s < 4) {
    document
      .querySelector(`.circle[data-slide="${0}"`)
      .classList.add("dot_active");
  } else if (s < 8) {
    document
      .querySelector(`.circle[data-slide="${4}"`)
      .classList.add("dot_active");
  } else {
    document
      .querySelector(`.circle[data-slide="${8}"`)
      .classList.add("dot_active");
  }
};

const moveSlide = (s) => {
  img_container.forEach(
    (slide, i) => (slide.style.transform = `translateX(${-105 * s}%)`)
  );
  activateDot(s);
};
let slide = 0;
window.addEventListener("load", () => {
  setInterval(() => {
    if (slide === imgElement.length - 4) {
      slide = -1;
    }
    slide++;

    moveSlide(slide);
  }, 2500);
});

////////////////////////////MOUNTAIN TABS 1&2////////////////////////////////////////////

mountain_2_tab.addEventListener("click", () => {
  tab_content_1.classList.add("inactive_tab_content");
  tab_content_2.classList.remove("inactive_tab_content");
  mountain_2_tab.classList.add("selected");
  mountain_1_tab.classList.remove("selected");
  image.style.backgroundImage = `url(${"images/not_birdy_mount.jpg"})`;
});

mountain_1_tab.addEventListener("click", () => {
  tab_content_2.classList.add("inactive_tab_content");
  tab_content_1.classList.remove("inactive_tab_content");
  mountain_1_tab.classList.add("selected");
  mountain_2_tab.classList.remove("selected");
  image.style.backgroundImage = `url(${"images/birdy_mount.jpg"})`;
});
