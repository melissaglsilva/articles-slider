const background = document.getElementById('container')
const slides = document.querySelectorAll('.slide')
const forwardArrows = document.getElementById('forward-arrow')
const backArrows = document.getElementById('back-arrow')

let currentIndex = 0;

forwardArrows.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    changeSlide(currentIndex, currentIndex + 1)
    currentIndex++
    backArrows.classList.remove('block-cursor')
  }
  if(currentIndex == slides.length -1){
    forwardArrows.classList.add('block-cursor')
  }
})

backArrows.addEventListener('click', () => {
  if (currentIndex > 0) {
    changeSlide(currentIndex, currentIndex - 1)
    currentIndex--
    forwardArrows.classList.remove('block-cursor')
  }
  if(currentIndex == 0){
    backArrows.classList.add('block-cursor')
  }
})

function changeSlide(currentIndex, nextIndex) {
  slides[nextIndex].classList.remove('hidden')
  slides[currentIndex].classList.add('hidden')
  background.classList.remove(`slide${currentIndex}`)
  background.classList.add(`slide${nextIndex}`)
}