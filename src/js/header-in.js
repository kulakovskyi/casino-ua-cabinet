//burger
const iconMenu = document.querySelector(".menu__icon");
const iconMenuSpan = document.querySelector(".circle");
const menuBody = document.querySelector(".header__menu");
const body = document.querySelector("body");
const headerFix = document.querySelector('.header')

iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    iconMenuSpan.classList.toggle("_active")
    body.classList.toggle("_lock");
    headerFix.classList.toggle('_open')
});

//tap in burger on mobile

const itemTitleAcord = document.querySelectorAll('.menu__item-open')
let screenWidth = window.screen.width;

if (screenWidth <= 1024) {
    itemTitleAcord.forEach(item => {
        item.classList.remove('menu__item-hover')
        item.addEventListener("click", () => {
            const itemList = item.querySelector('.menu__item-list')
            itemList.classList.toggle('_open')
            item.classList.toggle('_open')
        })
    })
}

//new

const headerCabinetBtnMob = document.querySelector('.header__cabinet-mob')
const headerBtnsCabinet = document.querySelector('.header__cabinet-btns')

headerCabinetBtnMob.addEventListener('click', ()=>{
    headerBtnsCabinet.classList.toggle('_open')
})
