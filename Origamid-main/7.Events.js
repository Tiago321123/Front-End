const img = document.querySelector('img');

img.addEventListener('click', function(){
    console.log('clicou');
})

// É uma boa prática separar a funcao que será chamada, fácil para debugar
img.addEventListener('click',callback);
function callback(){
    console.log('clicouuuu');
}

const animais = document.querySelector('.animais-lista');
function callbackLista(event){
    console.log(event.currentTarget); // pega o elemento que foi selecionado ali em animais
    console.log(event.target); // pega exatamente o elemento que vc clicou
    console.log(event.type); // type: click
    console.log(event.path); // retorna varios elementos aí
}
animais.addEventListener('click',callbackLista);

const linkExterno = document.querySelector('a[href^="http"]');
function clickLink(event){
    event.preventDefault(); // impede de executar o evento, no caso é um link
    console.log(event.currentTarget); /* faz o mesmo q */console.log(this); // é o próprio linkExterno
    console.log(this.getAttribute('href')); // aparece apenas o link
}
linkExterno.addEventListener('click',clickLink);

const h1 = document.querySelector('h1');

function handleEvent(event){
    console.log(event.type, event);
}
/*
h1.addEventListener('click',handleEvent);
h1.addEventListener('mouseenter',handleEvent);// o mouse entra, é ativado
h1.addEventListener('mousemove',handleEvent);// todos os movimentos no elemento

window.addEventListener('keydown',handleEvent); // pega a tecla pressionada
window.addEventListener('scroll',handleEvent); // scroll se meche, é ativado
window.addEventListener('resize',handleEvent); //quando redimensiona a tela, mostra os dados
*/
function handleKeyBoard(event){
    console.log(event.key)
    if(event.key == 'f'){
        console.log('apertou f');
        document.body.classList.toggle('fullScreen'); //se tiver tira, se não, coloca
    }
    else if(event.key == 'v'){
        document.body.classList.toggle('verde');
    }
}
 
window.addEventListener('keydown',handleKeyBoard);

const imgs = document.querySelectorAll('img');
function handleImg(event){
    console.log(event.target);
    console.log(event.currentTarget.getAttribute('src'));
}

imgs.forEach((img) =>{
    img.addEventListener('click',handleImg);
})



const linksInternos = document.querySelectorAll('a[href^="#"]');
linksInternos.forEach((item) =>{
    item.addEventListener('click',linkAtivo);
})

function linkAtivo(event){
    event.preventDefault();
    linksInternos.forEach((link) =>{
        link.classList.remove('ativo');
    })
    event.currentTarget.classList.add('ativo');
}
const elements = document.querySelectorAll('body *'); // seleciona todos os elementos depois do body

function handleElement(event){
    console.log(event.currentTarget);
    //console.log(event.currentTarget.remove()) remover quando clicado
}

elements.forEach((item) =>{
    item.addEventListener('click',handleElement);
});

window.addEventListener('keydown',keydown)
function keydown(event) {
    if(event.key == 't'){
        document.documentElement.classList.toggle('aumentarTexto')
        //no css: html.aumentarTexto{ font-size: 150% };
    }
}