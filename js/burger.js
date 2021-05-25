export default function burger() {
    const humburgerElem = document.querySelector('.humburger-menu');
    const menuElem = document.querySelector('.menu');
    const handletMenu = event => {
        const target = event.target;
        const parent = target.closest('.menu');
        if ((!parent && target !== humburgerElem) || target.matches('.menu-list__link')) {
            toggleMenu();
        }
    }
    
    const toggleMenu = () => {
        menuElem.classList.toggle('menu-active');
        humburgerElem.classList.toggle('humburger-menu-active');
    
        if (menuElem.classList.contains('menu-active')) {
            document.body.addEventListener('click', handletMenu);
        } else {
            document.body.removeEventListener('click', handletMenu);
        }
    }
    humburgerElem.addEventListener('click', toggleMenu);
}