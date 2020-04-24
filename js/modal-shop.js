var hoverProduct = document.querySelector(".product-2");
var modalPrice = document.querySelector(".modal-card-pink");

hoverProduct.addEventListener("mouseover", function(evt) {
  evt.preventDefault();
  modalPrice.classList.add("modal-shop-show");
})

hoverProduct.addEventListener("mouseout", function(evt) {
  evt.preventDefault();
  modalPrice.classList.remove("modal-shop-show");
})
