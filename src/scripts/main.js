const buttons = document.querySelectorAll('[data-tab-button]');
document.addEventListener('DOMContentLoaded', function() {
    
    console.log(buttons)
    const tabsContainer = document.querySelectorAll('[data-tab-id]');
    const questions =document.querySelectorAll('[data-faq-question]');
    
    const heroSection = document.querySelector('.hero');
    const alturaHero = heroSection.clientHeight;
    
    window.addEventListener('scroll', function() {
        const posicaoAtual = window.scrollY;

        if (posicaoAtual < alturaHero) {
            ocultarElementosDoHeader();
            console.log('ocultar elementos')
        } else {
            exibeElementosDoHeader();
        }
    })
    
    
    
    
    /* é necessário o array pois o retorno do querySelector
    é um array. Ou seja, é necessário aplicar a função a cada elemento.
    Não se trata de todos os elementos de tal classe selecionados (como
    no CSS), mas o retorno de uma lista de elementos */
    /* Seção atrações, programação das abas */
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            
            const abaAlvo = button.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            escondeTodasAbas();
            aba.classList.add('shows__list--is-active')
            button.target.classList.add('shows__tabs__button--is-active')
        })
    }
    /* Seção faq, programação do accordion */
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta)
        
    }
})
function exibeElementosDoHeader() {
    const header = document.querySelector('.header');

    header.classList.remove('header--is-hidden');
}

function ocultarElementosDoHeader() {
    const header = document.querySelector('.header');

    header.classList.add('header--is-hidden');
}

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
