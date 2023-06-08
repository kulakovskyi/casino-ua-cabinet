//тестовая кнопка попапа
const body = document.querySelector('body')

//все стадии

const popupSupply = document.querySelector('.supply');

const formPopupTwo = document.querySelector('.supply__form')
const checkBox = document.querySelector('.js-check')
const inputEmail = document.querySelector('.js-email')
const labelCheck = document.querySelector('.supply__form-check-label')
const textInputs = document.querySelectorAll('.js-input')
const selects = document.querySelectorAll('.supply__form-select')
const numberInput = document.querySelector('.supply__form-number')
const themeSelect = document.querySelector('.theme__select')
//последний попап после валидации
const popupDone = document.querySelector('.done__wrap');

themeSelect.addEventListener('change', () => {
    console.log(themeSelect.value)
    themeSelect.value === 'money' ? numberInput.classList.remove('_none') : numberInput.classList.add('_none')
})


//функция для валидации имейла
function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

formPopupTwo.addEventListener("submit", (event) => {
    event.preventDefault()
    //массив из всех пустых инпутов и селектов
    emptyInputs = Array.from(textInputs).filter((input) => input.value === "");
    emptySelects = Array.from(selects).filter((select) => select.selectedIndex === 0);
    //проверка инпута на пустоту
    textInputs.forEach(function (input) {
        (input.value === "") ? input.classList.add("_error") : input.classList.remove("_error")
    });

    //проверка селектов на выбраность
    selects.forEach(select => {
        let selNum = select.selectedIndex;
        (selNum === 0) ? select.classList.add('_error') : select.classList.remove('_error')
    })

    //проверка чекбокса на пустоту
    if (!checkBox.checked) {
        labelCheck.classList.add("_error");
    } else {
        labelCheck.classList.remove("_error");
    }

    //проверка числа денег
    if(themeSelect.value === 'money' && numberInput.value === ''){
        numberInput.classList.add('_error')
    } else {
        numberInput.classList.remove('_error')
    }

    //проверка имейла
    let emailVal = inputEmail.value;
    if(!validateEmail(emailVal)) {
        inputEmail.classList.add('_error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }

    //блокировка кнопки до момента, пока все инпуты не будут заполнены
    if (emptyInputs.length !== 0 || !checkBox.checked || emptySelects.length !== 0 || (themeSelect.value === 'money' && numberInput.value === '')) {
        console.log("inputs not filled");
        return false
    } else {
        console.log("go");
        // тут открытие последнего попапа, сюда прикручивай что на сервер отправляется
        popupDone.classList.remove('_hidden')
    }
});




