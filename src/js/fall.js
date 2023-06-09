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

//Для отображения картинок внизу поля выбора
const fileInput = document.getElementById('file-input');
const chooseButton = document.getElementById('choose-button');
const preview = document.getElementById('preview');
let images = [];

chooseButton.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', () => {
    const files = fileInput.files; // Получаем выбранные файлы из поля ввода файлов

    for (let i = 0; i < files.length; i++) {
        const file = files[i]; // Получаем текущий выбранный файл
        const reader = new FileReader(); // Создаем новый объект FileReader для чтения содержимого файла

        reader.onload = (e) => {
            const previewItem = document.createElement('div');
            previewItem.classList.add('previewItem')
            preview.appendChild(previewItem);
            const image = document.createElement('img');
            image.src = e.target.result; // Устанавливаем источник картинки в качестве содержимого файла
            image.classList.add('preview-image');
            previewItem.appendChild(image);
            images.push(image);

            const deleteButton = document.createElement('button'); // Создаем кнопку удаления
            deleteButton.classList.add('delete-button');
            deleteButton.addEventListener('click', () => {
                preview.removeChild(previewItem); // Удаляем изображение из предварительного просмотра
                images = images.filter((img) => img !== image); // Удаляем изображение из массива картинок
                deleteButton.remove() // Удаляем кнопку
            });
            image.parentNode.insertBefore(deleteButton, image.nextSibling); // Добавляем кнопку удаления после изображения
        };

        reader.readAsDataURL(file); // Читаем содержимое файла в формате Data URL
    }
});




