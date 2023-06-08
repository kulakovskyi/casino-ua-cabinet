const popupBtnOpen = document.querySelector('.popup-btn-click')
const popupBtnClose = document.querySelector('.popup-message__info-btn-close')
const popUpSubscribe = document.querySelector('.popup-message')
const body = document.querySelector('body')

popupBtnOpen.addEventListener('click', () => {
    body.classList.add('_lock')
    popUpSubscribe.classList.remove('_hidden')
})

popupBtnClose.addEventListener('click', () => {
    body.classList.remove('_lock')
    popUpSubscribe.classList.add('_hidden')
})




