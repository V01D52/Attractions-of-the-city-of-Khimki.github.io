document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.getElementById('slider-container');
  const slider = document.getElementById('slider');
  const slides = slider.querySelectorAll('.slider-image');
  const arrows = sliderContainer.querySelectorAll('.arrow');
  const paginationCircles = sliderContainer.querySelectorAll('.pagination-circle');

  let currentSlide = 0;
  const slideCount = slides.length;

 function updateSlider() {
   slides.forEach((slide, index) => {
          if (index === currentSlide) {
           slide.classList.add('block')
        } else {
              slide.classList.remove('block');
          }
     });
    paginationCircles.forEach((circle, index) => {
        circle.classList.toggle('active', index === currentSlide);
    });
}

function nextSlide() {
   currentSlide = (currentSlide + 1) % slideCount;
   updateSlider();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slideCount) % slideCount;
    updateSlider();
}


arrows.forEach(arrow => {
   arrow.addEventListener('click', () => {
       if (arrow.classList.contains('arrow-left')) {
          prevSlide();
       } else {
         nextSlide();
       }
   });
});

paginationCircles.forEach((circle, index) => {
   circle.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
   });
});


updateSlider();
});