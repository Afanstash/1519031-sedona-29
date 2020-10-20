const popup = document.querySelector(".form-search");
const link = document.querySelector(".modal-button");
const day_in = popup.querySelector("[name=day-in]");
const day_out = popup.querySelector("[name=day-out]");
const adult = popup.querySelector("[name=adult]");
const children = popup.querySelector("[name=children]");

let isStorageSupport = true;
let storageAdult = "";
let storageChildren = "";

// popup.classList.add("modal-hidden");

// link.addEventListener("click", function (evt) {
//   evt.preventDefault();
//   popup.classList.remove("modal-hidden");
//   popup.classList.add("modal-show");
//   day_in.focus();
//   if (storageAdult) {
//     adult.value = storageAdult;
//   }
// });

// popup.addEventListener("submit", function (evt) {
//   if (!day_in.value || !day_in.value) {
//     evt.preventDefault();
//     popup.classList.remove("modal-error");
//     popup.offsetWidth = popup.offsetWidth;
//     popup.classList.add("modal-error");
//     console.log("Введите даты заезда и выезда!");
//   } else {
//     evt.preventDefault();
//     if (isStorageSupport) {
//       localStorage.setItem("adult", adult.value);
//     }
//   }
// });

//  try {
//   storage = localStorage.getItem("adult");
//  } catch (err) {
//   isStorageSupport = false;
//  }

//  window.addEventListener("keydown", function (evt) {
//   if (evt.keyCode === 27) {
//     if (popup.classList.contains("modal-show")) {
//       evt.preventDefault();
//       popup.classList.remove("modal-show");
//       popup.classList.remove("modal-error");
//       popup.classList.add("modal-hidden");
//     }
//   }
// });


popup.classList.add("modal-hidden");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-hidden");
  popup.classList.toggle("modal-animation");
  // popup.classList.remove("modal-hidden");
  // popup.classList.add("modal-animation");
  day_in.focus();
  if (storageAdult) {
    adult.value = storageAdult;
    children.value = storageChildren;
  }
});

popup.addEventListener("submit", function (evt) {
  if (!day_in.value || !day_out.value) {
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
