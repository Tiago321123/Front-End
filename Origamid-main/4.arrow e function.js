const animais = document.getElementById('animais');
console.log(animais);
const contato = document.getElementById('contato');

const animal = document.querySelector('#animais');
const contatos = document.querySelector('#contatos');
const ultimoItem = document.querySelector('.animais-lista li:last-child');
const primeiroUl = document.querySelector('ul');

console.log(primeiroUl);
// busca li dentro de ul apenas
const linksInternos = document.querySelector("[href^='#']"); // aspas duplas
console.log(linksInternos);
const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg[1]);

const coletionHtml = document.getElementsByClassName("grid-section"); // HTMLCollection
const coletionNode = document.querySelectorAll(".grid-section"); // NodeList

primeiroUl.classList.add("grid-section");
console.log(coletionHtml); // é de forma dinâmica, se atualiza a classe, a variável também muda
console.log(coletionNode); // é de forma estática, se atualiza a classe, a variável não muda

// Esses dois são Array-like, são mas não são array.
coletionNode.forEach(function(item,index,arrayInteiro) { //Node tem forEach, html não
    console.log(index,item,arrayInteiro);
})

const newArray = Array.from(coletionHtml); // transforma um array-like em array comum;
console.log(newArray);

newArray.forEach(function(item){ // agora consigo usar o forEach
    console.log(item);
})

//Exercícios
const imagensAnimais = document.querySelectorAll("img[src^='img/imagem']");
console.log(imagensAnimais);

let h2Animais = document.querySelector(".descricao h2"); // retorna o primeiro h2 de .descricao
console.log(h2Animais);

const animais2 = document.querySelector(".descricao"); // tem assim também
h2Animais = animais2.querySelector("h2");
console.log(h2Animais);

let lastP = document.querySelectorAll('p'); // pegar o ultimo p do html, só assim mesmo
console.log(lastP[--lastP.length]); // ultimo

// function

animaisImg.forEach(item=>{ // apenas um, sem () já dá
    console.log(item);
});

//ou
animaisImg.forEach(item=> console.log(item));

animaisImg.forEach((item,index)=>{ // mais de um, precisa de (). Sem argumento, precisa de "()".
    console.log(item,index);
});

// Exercicios

const todosP = document.querySelectorAll('p');
todosP.forEach(item=> console.log(item));

todosP.forEach(item=> console.log(item.innerText));
