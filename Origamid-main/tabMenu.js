const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

// se usar em outra página e não tiver nada nesses elementos, vai dar erro
if (tabMenu.length && tabContent) {
    function active(index) {
        tabContent.forEach((section) => {
            section.classList.remove('active');
        });
        tabContent[index].classList.add('active');
    }

    tabMenu.forEach((itemMenu, index) => {
        itemMenu.addEventListener('click', function () {
            active(index);
        });
    });
}
