// Class

const menu = document.querySelector(".menu");

console.log(menu.className);
console.log(menu.classList);
menu.classList.add('ativo','inativo');
console.log(menu.className);

menu.classList.toggle('ativo'); // se tiver tira, se não, adiciona
console.log(menu.classList.contains('ativo'));

menu.classList.replace('inativo','reyMen');

if(menu.classList.contains('reyMen')){
    menu.classList.add('ativo');
} console.log(menu.classList);

menu.className = 'todas as classes';
console.log(menu.className);
menu.className += ' vermelho';

// Attributes

const animais = document.querySelector('#animais');

console.log(animais.attributes[0]); // vê class, id, o q tiver no html lá
console.log(animais.attributes.class);
console.log(animais.attributes.id);
console.log(animais.attributes['data-texto']);

const img = document.querySelector('img');

console.log(img.getAttribute('src'));
console.log(img.getAttribute('alt'));
img.setAttribute('alt','novo alt'); // mudar um atributo ou adicionar um novo
console.log(img.hasAttribute('alt') + " = tem o atributo alt"); 
img.removeAttribute('alt');

// Exercicíos

const allMenu = menu.querySelectorAll('.todas a'); // 'todas as classes' não precisa escrever todas as classes, só a primeira
allMenu.forEach(item => item.classList.add('ativo'));

allMenu.forEach((item,index) =>{
    if(index!=0){
        item.removeAttribute('class');
    }
});

const imgs = document.querySelectorAll('img'); 
imgs.forEach(item => console.log(item,item.hasAttribute('alt')));

const linkExterno = document.querySelector('a[href^="http"]');
linkExterno.setAttribute('href','outro');

// No console, $0 marca algum elemento do html, usa o elemento escolhido

// Dimensões e distâncias

const animaisLista = document.querySelector('.animais-lista');
console.log(animaisLista.clientHeight + 'height do element'); // mostra a altura do elemento, dá com width também
console.log(animaisLista.scrollHeight + 'height do scroll dentro'); // mostra a altura de um scroll que tem nele

console.log(animaisLista.offsetTop + 'distancia do elemento até o topo'); // distancia do elemento até o topo
console.log(animaisLista.offsetLeft + 'distancia do elemento até a esquerda'); // distancia do elemento até a esquerda;
console.log(animaisLista.offsetWidth); // width da imagem + borda

const primeiroH2 = document.querySelector('h2'); 
console.log(primeiroH2.offsetTop);
const firstH2 = primeiroH2.getBoundingClientRect(); // manda várias coisas, heigth, width, left, top;
console.log(firstH2); // firstH2.propriedade

// tela do usuário

console.log(window.innerWidth + ' width'); // width da tela do usuário
console.log(window.innerHeight + ' height'); // height da tela do ususário
console.log(window.outerHeight + ' height até a aba do navegador'); // height até a aba do navegador
console.log(window.outerWidth + ' width até o scroll');

console.log(window.pageYOffset); // pega a distancia do scroll y atual, se chegar no final marca 0
console.log(window.pageXOffset); // mesma coisa, scroll x

if(firstH2.top < 0){  // tem que dar o refreshing pra dar certo, ñ é ao vivo
    console.log('passou do h2');
}
if(window.innerWidth < 600){ 
    console.log('Tela menor que 600px');
}

const mediaQuerieDoJs = window.matchMedia('(max-width: 600px)'); // é o media Querie do js, funciona bem pra isso
if (mediaQuerieDoJs.matches){
    console.log('Deu matche, Tela menor que 600px');
}else{
    console.log('Tela maior que 600px');
}

// Exercícios
console.log(animaisLista.offsetTop);

let somaImgWidth=0;
imgs.forEach((item)=> somaImgWidth += item.offsetWidth); // width of image + borda;
console.log(somaImgWidth);

const links = document.querySelectorAll('body [href]');
window.onload = () => {
    links.forEach((link)=> {
        if(link.clientHeight < 48 || link.clientWidth < 48){
            console.log(link.clientHeight, link.clientWidth);
            console.log(link, ' Não atende a recomendação');
        }
    })
}