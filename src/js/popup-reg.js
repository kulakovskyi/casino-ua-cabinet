//input password

const iconPasswordShow = document.querySelector('.icon-pass')
const passwordInput = document.querySelector('.popup-reg__info-pass')

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

const formPopup = document.querySelector('.popup-reg__info-form');
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