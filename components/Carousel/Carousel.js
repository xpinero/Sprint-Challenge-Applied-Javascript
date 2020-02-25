/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

let index = 0;

function nextImage(event) {
  const nextIndex = index + 1;
  const images = document.querySelectorAll(".carousel img");
  if (nextIndex > images.length - 1) {
    return;
  }
  const currentImage = images[index];
  const nextImage = images[nextIndex];
  currentImage.style.display = "none";
  nextImage.style.display = "block";
  index = nextIndex;
}

function prevImage(event) {
  if (index === 0) {
    return;
  }
  const prevIndex = index - 1;
  const images = document.querySelectorAll(".carousel img");
  const currentImage = images[index];
  const prevImage = images[prevIndex];
  currentImage.style.display = "none";
  prevImage.style.display = "block";
  index = prevIndex;
}

function createCarousel() {
  const carousel = document.createElement("div");
  carousel.classList.add("carousel");

  const leftBtn = document.createElement("div");
  leftBtn.classList.add("left-button");
  leftBtn.textContent = "<";
  leftBtn.addEventListener("click", prevImage);

  const imgOne = document.createElement("img");
  imgOne.src = "./assets/carousel/mountains.jpeg";
  imgOne.style.display = "block";

  const imgTwo = document.createElement("img");
  imgTwo.src = "./assets/carousel/computer.jpeg";

  const imgThree = document.createElement("img");
  imgThree.src = "./assets/carousel/trees.jpeg";

  const imgFour = document.createElement("img");
  imgFour.src = "./assets/carousel/turntable.jpeg";

  const rightBtn = document.createElement("div");
  rightBtn.classList.add("right-button");
  rightBtn.textContent = ">";
  rightBtn.addEventListener("click", nextImage);

  carousel.appendChild(leftBtn);
  carousel.appendChild(imgOne);
  carousel.appendChild(imgTwo);
  carousel.appendChild(imgThree);
  carousel.appendChild(imgFour);
  carousel.appendChild(rightBtn);

  const carouselContainer = document.querySelector(".carousel-container");
  carouselContainer.appendChild(carousel);
}

createCarousel();
