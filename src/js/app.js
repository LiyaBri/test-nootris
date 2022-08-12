window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__menu'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.burger'),
    hamburgerLine = document.querySelectorAll('.burger__line');
    //menu_body = document.querySelector('.menu__body');

    hamburger.addEventListener('click', () => {
        hamburgerLine.forEach(item => {
            item.classList.toggle('active__burger');
        })
        menu.classList.toggle('active__menu');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburgerLine.forEach(item => {
                item.classList.toggle('active__burger');
            })
            menu.classList.toggle('active__menu');
        })
    })
})
