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