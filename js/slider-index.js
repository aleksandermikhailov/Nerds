var slideButtonOne = document.querySelector(".slide-switch-btn-1");
var slideButtonTwo = document.querySelector(".slide-switch-btn-2");
var slideButtonThree = document.querySelector(".slide-switch-btn-3");
var slideOne = document.querySelector(".slide-first");
var slideTwo = document.querySelector(".slide-second");
var slideThree = document.querySelector(".slide-third");

slideButtonOne.addEventListener("click", function(evt) {
  evt.preventDefault();
  if (slideTwo.classList.contains("slide-appear") || slideThree.classList.contains("slide-appear")) {
    slideTwo.classList.remove("slide-appear");
    slideThree.classList.remove("slide-appear");
  }
  if (slideOne.classList.contains("slide-disappear")) {
    slideOne.classList.remove("slide-disappear");
  }
  if (!slideButtonOne.classList.contains("checked") || slideButtonTwo.classList.contains("checked") || slideButtonThree.classList.contains("checked")) {
    slideButtonOne.classList.add("checked");
    slideButtonTwo.classList.remove("checked");
    slideButtonThree.classList.remove("checked");
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
  if (!slideButtonTwo.classList.contains("checked") || slideButtonOne.classList.contains("checked") || slideButtonThree.classList.contains("checked")) {
    slideButtonOne.classList.remove("checked");
    slideButtonThree.classList.remove("checked");
    slideButtonTwo.classList.add("checked");
  }
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
  if (!slideButtonThree.classList.contains("checked") || slideButtonOne.classList.contains("checked") || slideButtonTwo.classList.contains("checked")) {
    slideButtonOne.classList.remove("checked");
    slideButtonTwo.classList.remove("checked");
    slideButtonThree.classList.add("checked");
  }
  slideThree.classList.add("slide-appear");
})
