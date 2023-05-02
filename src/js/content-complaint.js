//popup для открытия увеличенных картинок

const imagesMinContainer = document.querySelectorAll('.discussion__comment-user-question-doc-item');
const popupDiscusson = document.querySelector('.popup__discussion-up')
const imgBigPopup = document.querySelector('.imgBig')
const body = document.querySelector('body')
const popupClose = document.querySelector('.close-popup-dis')

imagesMinContainer.forEach(item => {
    let imgMinSrc = item.querySelector('.imgMin').getAttribute('src')
    item.addEventListener('click', ()=>{
        body.classList.add('_lock')
        popupDiscusson.classList.remove('_hidden')
        imgBigPopup.setAttribute('src', imgMinSrc)
    })
})

popupClose.addEventListener('click', () => {
    body.classList.remove('_lock')
    popupDiscusson.classList.add('_hidden')
})
