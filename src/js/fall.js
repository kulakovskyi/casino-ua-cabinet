//тестовая кнопка попапа
const popupBtnOpen = document.querySelector('.popup-btn-click')
const body = document.querySelector('body')

//оболочка всез 3х попапов
const popupAllWrap = document.querySelector('.popup-fall')

popupBtnOpen.addEventListener('click', () => {
    body.classList.add('_lock')
    popupAllWrap.classList.remove('_hidden')
})


//скролл текста и активация кнопки поле конца прокрутки

const btnFirstAttenbtion = document.querySelector('.popup-attention__btn')
const scrollText = document.querySelector('.popup-attention__text')
const arrowForm = document.querySelector('.popup-attention__arrow')
const popUpAttentionWrap = document.querySelector('.popup-attention__wrapper')

//кнопка закрытия первого попапа
const popupAttentionBtnClose = document.querySelector('.popup-attention__btn-close')
popupAttentionBtnClose.addEventListener('click', () => {
    popupAllWrap.classList.add('_hidden')
})

//кнопка закрытия 2 попапа
const popupSupplyBtnClose = document.querySelector('.popup-supply__btn-close')
popupSupplyBtnClose.addEventListener('click', () => {
    popupAllWrap.classList.add('_hidden')
})

//кнопка закрытия 3 попапа
const popupDoneBtnClose = document.querySelector('.popup-done__btn-close')
popupDoneBtnClose.addEventListener('click', () => {
    popupAllWrap.classList.add('_hidden')
})

//все стадии
const popupAttention = document.querySelector('.popup-attention');
const popupSupply = document.querySelector('.popup-supply');


btnFirstAttenbtion.addEventListener('click',() => {
    popupAttention.classList.add('_hidden')
    popupSupply.classList.remove('_hidden')

})


scrollText.addEventListener('scroll', onScroll)
function onScroll () {
    if (scrollText.scrollHeight - scrollText.scrollTop === scrollText.clientHeight) {
        btnFirstAttenbtion.classList.remove('_disabled')
        //убираем анимацию стрелки
        arrowForm.classList.remove('_anim')
        //убираем белый фон внизу текста
        popUpAttentionWrap.classList.remove('_top')
        scrollText.removeEventListener('scroll', onScroll)
    }
}

//скрытие первого попапа и открытие второго
btnFirstAttenbtion.addEventListener('click',() => {
    popupAttention.classList.add('_hidden')
})

const formPopupTwo = document.querySelector('.popup-supply__form')
const checkBox = document.querySelector('.js-check')
const inputEmail = document.querySelector('.js-email')
const labelCheck = document.querySelector('.popup-supply__form-check-label')
const textInputs = document.querySelectorAll('.js-input')
const selects = document.querySelectorAll('.popup-supply__form-select')
//последний попап после валидации
const popupDone = document.querySelector('.popup-done');

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

    //проверка имейла
    let emailVal = inputEmail.value;
    if(!validateEmail(emailVal)) {
        inputEmail.classList.add('_error');
        return false;
    } else {
        inputEmail.classList.remove('error');
    }

    //блокировка кнопки до момента, пока все инпуты не будут заполнены
    if (emptyInputs.length !== 0 || !checkBox.checked || emptySelects.length !== 0) {
        console.log("inputs not filled");

        return false
    } else {
        console.log("go");
        popupDone.classList.remove('_hidden')
        popupSupply.classList.add('_hidden')
    }
});

//кнопка закрытия done 3 popup
const popupDoneBtnMain = document.querySelector('.popup-done__link')
popupDoneBtnMain.addEventListener('click', ()=>{
    popupAllWrap.classList.add('_hidden')

})


