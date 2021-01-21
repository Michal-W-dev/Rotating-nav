const btnOpen = document.querySelector('.open')
const btnClose = document.querySelector('.close')

const container = document.querySelector('.container')

btnOpen.addEventListener('click', function () {
    container.classList.add('show-nav')
})
btnClose.addEventListener('click', function () {
    container.classList.remove('show-nav')
})