document.addEventListener('DOMContentLoaded', () => {
    
});

const moreElems = document.querySelectorAll('.more');
const modalElem = document.querySelector('.modal');

    const openModal = () => {
        modalElem.classList.remove('hidden');
        //
        disableScroll();
    }
    const closeModal = () => {
        modalElem.classList.add('hidden');
        //
        enableScroll();
    }

    moreElems.forEach(moreElem => {
        moreElem.addEventListener('click', openModal);
    });
    
    modalElem.addEventListener('click', (e) => {
        const target = e.target;
        if(target.classList.contains('overlay') || target.classList.contains('modal__close')) closeModal();
    })