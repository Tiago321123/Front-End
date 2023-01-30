const contato = document.querySelector('.contato');

console.log(contato.outerHTML); // todo html do elemento, inclusive ele
console.log(contato.innerHTML); // html dentro dele, os filhos
console.log(contato.innerText); // apenas o texto

const h1 = document.querySelector('h1');
h1.innerHTML = '<p>olá mundo</p>'; // ainda funciona, mas em <p>
h1.outerHTML = '<h1 class="titulo">olá</h1>'; // tem q ser o html inteiro do elemento

const lista = document.querySelector('.animais-lista');
console.log('Parent Element of animais-lista: ');
console.log(lista.parentElement); // apenas o elemento pai
console.log('Avô: ');
console.log(lista.parentElement.parentElement); //  o avô, html resumido do body
console.log('Next element html: ');
console.log(lista.nextElementSibling); // next element html
console.log('Anterior element: ');
console.log(lista.previousElementSibling); // prev element html

console.log(lista.children); // collection of children (filhos)
console.log(lista.children[--lista.children.length]); // the last child
// or
console.log(lista.querySelector('li:last-child')); // seleciona como css e não precisa de 'document.query...'

console.log(lista.childNodes); // é muito específico, pega tudo q tiver, até os espaços em branco
console.log(lista.previousSibling); // como o node, pega até mesmo o espaço que tiver atrás
console.log(lista.firstChild); // firstElementChild: esse sim pega o first Element

// Mover elementos no DOM com elementos do Node  DA HORA, VOU USAR
const animais = document.querySelector('.animais');
const tituloContato = document.querySelector('.contato h1');
animais.appendChild(contato); // move a section 'contato' toda para dentro de 'animais', no final
contato.insertBefore(lista, tituloContato); // move lista para antes de titulo do Contato, mas o tituloContato tem q ser da const contato
contato.removeChild(tituloContato); // remove titulo do Contato
//contato.replaceChild(lista, tituloContato); // troca o titulo do Contato pela lista, mas o tituloContato tem q ser da const contato

const mapa = document.querySelector('.mapa');
const newh1 = document.createElement('h1');
newh1.innerText = 'New Title';
newh1.classList.add('.titulo');
mapa.appendChild(newh1);

const titulo = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const NovoTitulo = titulo;
// titulo, titulo2, NovoTitulo são iguais, por enquanto

const CloneTitulo = lista.cloneNode(true); // true clona todo elemento, até os filhos, false é apenas ele
contato.appendChild(CloneTitulo);

// ordenar menor pro maior, sort é de string originalmente
const objeto = [3, 6, 4, 1, 8, 34, 231];
console.log(objeto.sort(ordena));
function ordena(x, y) {
    return x - y;
}

// EXERCÍCIOS

// duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const cloneMenu = menu.cloneNode(true);
cloneMenu.classList.add('.titulo');
const copy = document.querySelector('.copy');
copy.appendChild(cloneMenu);

// Selecione o primeiro DT da DL de faq
const faqLista = document.querySelector('.faq-lista');
console.log(faqLista.firstElementChild); // filho é só com id, classe
// ou

const faq = document.querySelector('.faq');
const faqlista = faq.querySelector('dt');
console.log(faqlista);

// Selecione o DD referente ao primeiro DT
console.log(faqlista.nextElementSibling);

// Substitua o faq pelos animais

faq.innerHTML = animais.innerHTML; // assim ele copia o texto, mas não o css dele
