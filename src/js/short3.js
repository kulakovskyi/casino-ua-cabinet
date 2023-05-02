const popupBtnOpen = document.querySelector('.popup-btn-click')
const popupBtnClose = document.querySelector('.popup-login__info-btn-close')
const popUpSubscribe = document.querySelector('.popup-login')
const body = document.querySelector('body')

popupBtnOpen.addEventListener('click', () => {
    body.classList.add('_lock')
    popUpSubscribe.classList.remove('_hidden')
})

popupBtnClose.addEventListener('click', () => {
    body.classList.remove('_lock')
    popUpSubscribe.classList.add('_hidden')
})

//input password

const iconPasswordShow = document.querySelector('.icon-pass')
const passwordInput = document.querySelector('.popup-login__info-pass')

iconPasswordShow.addEventListener('click', () => {
    if(passwordInput.getAttribute('type') === 'password'){
        passwordInput.removeAttribute('type');
        passwordInput.setAttribute('type', 'text');
    } else {
        passwordInput.removeAttribute('type');
        passwordInput.setAttribute('type', 'password');
    }
})

//validation form

const formPopup = document.querySelector('.popup-login__info-form');
const inputsAll = document.querySelectorAll('.js-input');

formPopup.addEventListener('submit', () => {
    event.preventDefault()
    emptyInputs = Array.from(inputsAll).filter((input) => input.value === "");
    inputsAll.forEach(function (input) {
        (input.value === "") ? input.classList.add("_error") : input.classList.remove("_error")
    });
    if (emptyInputs.length !== 0) {
        console.log("inputs not filled");
        return false
    } else {
        console.log("go");
        //  сюда прикручивай что на сервер отправляется
    }
})