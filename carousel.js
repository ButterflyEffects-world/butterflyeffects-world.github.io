// ------ CAROUSEL ------
const slidesContainer = document.getElementById('slides-container')
const prevButton = document.getElementById('slide-arrow-prev')
const nextButton = document.getElementById('slide-arrow-next')

// Function to update button visibility based on scroll position
const updateArrows = () => {
  // Hide prevButton if at the start
  prevButton.style.display = slidesContainer.scrollLeft > 0 ? 'flex' : 'none'

  // Hide nextButton if at the end
  const maxScrollLeft =
    slidesContainer.scrollWidth - slidesContainer.clientWidth
  nextButton.style.display =
    slidesContainer.scrollLeft >= maxScrollLeft ? 'none' : 'flex'
}

// Initialize button visibility
updateArrows()

nextButton.addEventListener('click', () => {
  // Get the width of a slide dynamically
  const slideWidth =
    slidesContainer.firstElementChild.getBoundingClientRect().width
  slidesContainer.scrollLeft +=
    slideWidth + parseInt(getComputedStyle(slidesContainer).gap || 0)
})

prevButton.addEventListener('click', () => {
  const slideWidth =
    slidesContainer.firstElementChild.getBoundingClientRect().width
  slidesContainer.scrollLeft -=
    slideWidth + parseInt(getComputedStyle(slidesContainer).gap || 0)
})

// Listen for scroll events to update button visibility
slidesContainer.addEventListener('scroll', updateArrows)

// Update button visibility when window resizes
window.addEventListener('resize', updateArrows)
