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

/*-----------------PRODUCTS--------------*/
const previewContainer = document.querySelector(".product-preview");
const previewBox = previewContainer.querySelectorAll(".preview");

document.querySelectorAll(".products-container .product").forEach((product) => {
  product.onclick = () => {
    previewContainer.style.display = "flex";
    let name = product.getAttribute("data-name");
    previewBox.forEach((preview) => {
      let target = preview.getAttribute("data-target");
      if (name == target) {
        preview.classList.add("active");
      }
    });
  };
});

previewBox.forEach((close) => {
  close.querySelector(".fa-xmark").onclick = () => {
    close.classList.remove("active");
    previewContainer.style.display = "none";
  };
});
