const track = document.querySelector('.carousel-track');
let index = 0;

function nextSlide() {
  index++;
  if (index >= track.children.length) {
    index = 0;
  }
  updateCarousel();
}

function updateCarousel() {
  const width = track.children[0].clientWidth;
  track.style.transform = `translateX(${-index * width}px)`;
}

// Troca de slide a cada 3 segundos
setInterval(nextSlide, 3000);
