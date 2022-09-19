var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  speed: 500,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".bx-right-arrow",
    prevEl: ".bx-left-arrow",
  },
});
/*-----------------MENU ON CELLPHONE--------------*/
const menu = document.querySelector(".menu");
const checkBtn = document.querySelector("#check");
const hambIcon = document.querySelector(".fa-bars");
checkBtn.addEventListener("click", () => {
  console.log(checkBtn.checked);
  if (checkBtn.checked === true) {
    menu.style.left = "0";
    hambIcon.className = "fa-sharp fa-solid fa-xmark";
  } else {
    menu.style.left = "-100%";
    hambIcon.className = "fa-solid fa-bars";
  }
});
