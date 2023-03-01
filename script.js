window.onload = (event) => {

  let activeIndex = 0;

  const slides = document.getElementsByTagName("article");
  const leftButton = document.getElementById("left-button");
  const rightButton = document.getElementById("right-button");
  const leftButton1 = document.getElementById("left-button1");
  const rightButton1 = document.getElementById("right-button1");
  const leftButton2 = document.getElementById("left-button2");
  const rightButton2 = document.getElementById("right-button2");
  const leftButton3 = document.getElementById("left-button3");
  const rightButton3 = document.getElementById("right-button3");





  const handleLeftClick = () => {
    const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : slides.length - 1;

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
      nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "after";

    nextSlide.dataset.status = "becoming-active-from-before";

    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
  };

  const handleRightClick = () => {
    const nextIndex = activeIndex + 1 <= slides.length - 1 ? activeIndex + 1 : 0;

    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`),
      nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "before";

    nextSlide.dataset.status = "becoming-active-from-after";

    setTimeout(() => {
      nextSlide.dataset.status = "active";
      activeIndex = nextIndex;
    });
  };

  /* -- Mobile Nav Toggle -- */

  const nav = document.querySelector("nav");

  const handleNavToggle = () => {
    nav.dataset.transitionable = "true";

    nav.dataset.toggled = nav.dataset.toggled === "true" ? "false" : "true";
  };

  window.matchMedia("(max-width: 800px)").onchange = e => {
    nav.dataset.transitionable = "false";

    nav.dataset.toggled = "false";
  };


  leftButton.addEventListener("click", handleLeftClick);
  rightButton.addEventListener("click", handleRightClick);
  leftButton1.addEventListener("click", handleLeftClick);
  rightButton1.addEventListener("click", handleRightClick);
  leftButton2.addEventListener("click", handleLeftClick);
  rightButton2.addEventListener("click", handleRightClick);
  leftButton3.addEventListener("click", handleLeftClick);
  rightButton3.addEventListener("click", handleRightClick);
}
