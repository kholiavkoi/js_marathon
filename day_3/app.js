const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slideLength = mainSlide.querySelectorAll('div').length
const container = document.querySelector('.container')

sidebar.style.top = `-${(slideLength - 1) * 100}vh`

upBtn.addEventListener('click', function () {
    changeSlide('up')
})

downBtn.addEventListener('click', function () {
    changeSlide('down')
})

let activeSlideIndex = 0;

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slideLength) {
            activeSlideIndex = 0;
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slideLength - 1;
        }
    }
    const height = container.clientHeight

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}


