document.addEventListener('DOMContentLoaded', () => {
    const humburgerElem = document.querySelector('.humburger-menu');
    const menuElem = document.querySelector('.menu');

    const toggleMenu = () => {
        menuElem.classList.toggle('menu-active');
        humburgerElem.classList.toggle('humburger-menu-active');
    }

    humburgerElem.addEventListener('click', toggleMenu);
});