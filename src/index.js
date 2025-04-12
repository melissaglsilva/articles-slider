const slides = document.querySelectorAll('.slide')
const forwardArrows = document.querySelectorAll('.forward-arrow')
const backArrows = document.querySelectorAll('.back-arrow')

forwardArrows.forEach((forwardArrow, index) => {
  forwardArrow.addEventListener('click', () => {
    function removerSlide() {
      let currentSlide = slides[index].classList.contains('current')

      if (currentSlide) {
        slides[index].classList.remove('current')
        slides[index].classList.add('hided')
      }
    }
    removerSlide()

    function adicionarSlide() {
        slides[index + 1].classList.remove('hided')
        slides[index + 1].classList.add('current')
    }
    adicionarSlide()
  })
})


backArrows.forEach((backArrow, index) => {
  backArrow.addEventListener('click', () => {
    function removerSlide() {
      let currentSlide = slides[index].classList.contains('current')

      if (currentSlide) {
        slides[index].classList.remove('current')
        slides[index].classList.add('hided')
      }
    }
    removerSlide()

    function adicionarSlide() {
        slides[index - 1].classList.remove('hided')
        slides[index - 1].classList.add('current')
    }
    adicionarSlide()
  })
})

