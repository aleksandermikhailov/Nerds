var slideButtonOne = document.querySelector(".slide-switch-btn-1");
var slideButtonTwo = document.querySelector(".slide-switch-btn-2");
var slideButtonThree = document.querySelector(".slide-switch-btn-3");
var slideOne = document.querySelector(".slide-first");
var slideTwo = document.querySelector(".slide-second");
var slideThree = document.querySelector(".slide-third");

var modalOverlay = document.querySelector(".modal-overlay");
var writeButton = document.querySelector(".write-btn");
var modalContact = document.querySelector(".modal-contactus");
var userName = modalContact.querySelector("[name=fullname]");
var userMail = modalContact.querySelector("[name=e-mail]");
var userText = modalContact.querySelector("[name=user-letter]");
var form = modalContact.querySelector("form");
var storageUserName = localStorage.getItem("userName");
var storageUserMail = localStorage.getItem("userMail");
var modalClose = document.querySelector(".modal-close-btn");
var hoverProduct = document.querySelector(".product-2");
var modalPrice = document.querySelector(".modal-card-pink");

var isStorageSupport = true;
var storageUserName = "";
var storageUserMail = "";

try {
  storageUserName = localStorage.getItem("userName");
  storageUserMail = localStorage.getItem("userMail");
} catch (err) {
  isStorageSupport = false;
}

slideButtonOne.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (slideTwo.classList.contains("slide-appear") || slideThree.classList.contains("slide-appear")) {
    slideTwo.classList.remove("slide-appear");
    slideThree.classList.remove("slide-appear");
  }
  if (slideOne.classList.contains("slide-disappear")) {
    slideOne.classList.remove("slide-disappear");
  }
})

slideButtonTwo.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!slideOne.classList.contains("slide-disappear")) {
    slideOne.classList.add("slide-disappear");
  };
  if (slideThree.classList.contains("slide-appear")) {
    slideThree.classList.remove("slide-appear");
  };
  slideTwo.classList.add("slide-appear");
})

slideButtonThree.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (!slideOne.classList.contains("slide-disappear")) {
    slideOne.classList.add("slide-disappear");
  };
  if (slideTwo.classList.contains("slide-appear")) {
    slideTwo.classList.remove("slide-appear");
  }
  slideThree.classList.add("slide-appear");
})

writeButton.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalOverlay.classList.add("modal-show");
  modalContact.classList.add("modal-show");
  if (storageUserName || storageUserMail) {
    userName.value = storageUserName;
    userMail.focus();
  } if (storageUserMail) {
    userMail.value = storageUserMail;
    userText.focus();
  } else {
    userName.focus();
}
})

form.addEventListener("submit", function(evt) {
  evt.preventDefault();
  if (!userName.value || !userMail.value || !userText.value) {
    modalContact.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("userName", userName.value);
      localStorage.setItem("userMail", userMail.value);
    }
  }
  if (modalContact.classList.contains("modal-error")) {
    modalContact.classList.remove("modal-error");
  }
})

modalClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalOverlay.classList.remove("modal-show");
  modalContact.classList.remove("modal-show");
  modalContact.classList.remove("modal-error");
})

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalContact.classList.contains("modal-show")) {
      modalContact.classList.remove("modal-show");
      modalContact.classList.remove("modal-error");
      modalOverlay.classList.remove("modal-show");
    }
  }
})

hoverProduct.addEventListener("mouseover", function(evt) {
  evt.preventDefault();
  modalPrice.classList.add("modal-shop-show");
})

hoverProduct.addEventListener("mouseout", function(evt) {
  evt.preventDefault();
  modalPrice.classList.remove("modal-shop-show");
})
