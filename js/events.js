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

writeButton.addEventListener("click", function(evt) {
  evt.preventDefault();
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
})

modalClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalContact.classList.remove("modal-show");
  modalContact.classList.remove("modal-error");
})

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalContact.classList.contains("modal-show")) {
      modalContact.classList.remove("modal-show");
      modalContact.classList.remove("modal-error");
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
