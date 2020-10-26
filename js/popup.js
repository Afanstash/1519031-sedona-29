const popup = document.querySelector(".form-search");
const link = document.querySelector(".modal-button");
const dayIn = popup.querySelector("[name=day-in]");
const dayOut = popup.querySelector("[name=day-out]");
const adult = popup.querySelector("[name=adult]");
const children = popup.querySelector("[name=children]");
const mapJS = document.querySelector(".map-js");

let isStorageSupport = true;
let storageAdult = "";
let storageChildren = "";

popup.classList.add("modal-hidden");

mapJS.classList.remove("modal-hidden");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.classList.toggle("modal-hidden");
  popup.classList.toggle("modal-animation");
  dayIn.focus();
  if (storageAdult) {
    adult.value = storageAdult;
  }
  if (storageChildren) {
    children.value = storageChildren;
  }
});

popup.addEventListener("submit", function (evt) {
  if (!dayIn.value || !dayOut.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    evt.preventDefault();
    if (isStorageSupport) {
      localStorage.setItem("adult", adult.value);
      localStorage.setItem("children", children.value);
    }
  }
});

 try {
  storageAdult = localStorage.getItem("adult");
  storageChildren = localStorage.getItem("children")
 } catch (err) {
  isStorageSupport = false;
 }

 window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (!popup.classList.contains("modal-hidden")) {
      evt.preventDefault();
      popup.classList.remove("modal-animation");
      popup.classList.remove("modal-error");
      popup.classList.add("modal-hidden");
    }
  }
});
