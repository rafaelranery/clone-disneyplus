const buttons = document.querySelectorAll('[data-tab-button]');
document.addEventListener('DOMContentLoaded', function() {
    
    console.log(buttons)
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    const questions =document.querySelectorAll('[data-faq-question]');
    
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta)
        
    }
    
    
    
    
    
    
    /* é necessário o array pois o retorno do querySelector
    é um array. Ou seja, é necessário aplicar a função a cada elemento.
    Não se trata de todos os elementos de tal classe selecionados (como
    no CSS), mas o retorno de uma lista de elementos */
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {

            const abaAlvo = button.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active')
            button.target.classList.add('shows__tabs__button--is-active')
        })
    }
})

function abreOuFechaResposta(elemento) {
    const classe = 'faq__questions__item--is-open';
    const elementoPai = elemento.target.parentNode;
    elementoPai.classList.toggle(classe)

}

function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active');
    }
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}