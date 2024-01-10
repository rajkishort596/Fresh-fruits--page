//selecting the list items and the hero image
const fruitsImages = document.querySelectorAll("li img");
const heroImage = document.querySelector(".hero-img");
const bg = document.querySelector(".bg");
//background color array
const Bgcolor = ["#fc4a55", "#ffcc02", "#92ba3c", "#fb6cb2", "#ffb42b"];
//Add a click event listener to each list item images
fruitsImages.forEach((image, index) => {
  image.addEventListener("click", () => {
    //get the source of the clicked image
    const newImageSrc = image.src;
    //update the hero image with the new source
    heroImage.src = newImageSrc;
    //update background color
    const backgroundColor = Bgcolor[index];
    document.querySelector(".bg").style.background = backgroundColor;
    //toogle a class on the parent element
    const parentElement = image.parentElement;
    parentElement.classList.add("active");
    //hide all other pseudo elements of parentElement
    const otherParentElement = document.querySelectorAll(
      " .thumb li:not(:nth-of-type(" + (index + 1) + "))"
    );
    otherParentElement.forEach((element) => {
      element.classList.remove("active");
    });
  });
});
//slide navigation menu
//selecting the hambergur menu and ul
const hambergur = document.querySelector(".hambergur");
const menu = document.querySelector("header ul");
const isLargeScreen = window.matchMedia("(min-width:768px)").matches;
console.log(isLargeScreen);
hambergur.addEventListener("click", function () {
  menu.classList.toggle("active");
  hambergur.classList.toggle("active");
  if (isLargeScreen) {
    menu.style.background = "none";
  } else {
    menu.style.background = bg.style.background;
  }
});
