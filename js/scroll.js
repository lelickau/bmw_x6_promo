document.addEventListener('DOMContentLoaded', () => {

});
//блокирует скролл
    const disableScroll = () => {
        document.body.dataset.scrollY = window.scrollY; // высота в данный момент
        const scrollWidth = window.innerWidth - document.body.offsetWidth; // ширина скролла браузера
        document.body.style.cssText = `
            position:fixed;
            top:-${window.scrollY}px;
            left:0;
            width:100%;
            overflow:hidden;
            height:100vh;
            padding-right:${scrollWidth}px;
        `;
    }

//активирует скролл
    const enableScroll = () => {
        document.body.style.cssText = '';
        window.scroll({top:document.body.dataset.scrollY});
    }