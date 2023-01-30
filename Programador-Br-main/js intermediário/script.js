console.log(document);
console.log(document.body);
alert('Please listen');
let b = document.getElementById('oi') ;
console.log(b);

let a = document.getElementsByClassName('ola');
console.log(a);
for (let p of a) {
    console.log(p);
}

let todosP = document.getElementsByTagName('p');
console.log(todosP); // ou apenas todosP no navegador
console.log(todosP[0]);
console.log(todosP[1]);
console.log(todosP[2]);
todosP[0].innerHTML = 'novo conteúdo'; // se colocar <h1> ou outro, ele vai obedecer, vai usar o <h1>
todosP[1].innerText = 'conteúdo mais novo'; // se colocar <h1>, qualquer tag, vai aparecer ela por escrito apenas
todosP[2].textContent = 'mais novo ainda'; // se colocar <h1>, qualquer tag, vai aparecer ela por escrito apenas

console.log(todosP[0].innerText); // vai mostrar apenas o q aparece na tela

todosP[0].textContent; // vai mostrar tudo q está no html, inclusive o 'Outro texto' q está display:none

todosP[0].style = 'color: blue';

document.getElementsByTagName('p')[0].innerHTML = 'Hello'; // fiz em uma linha apenas, diferente dos outros acima
let novoAtributo = todosP[2].getAttribute('novoAtributo'); // criei o atributo
console.log(novoAtributo);

todosP[2].setAttribute("novoAtributo","novo conteúdo atributo"); // mudei o conteudo do atributo
console.log(todosP[2].attributes.novoAtributo);

todosP[2].setAttribute('novoAtributo2Novo',"novo conteúdoatributo"); 
// criei o atributo e o conteudo do atributo tudo aqui
console.log(todosP[2].attributes.novoAtributo2Novo);

/*
<img id="image" src="smiley.gif">

<script>
document.getElementById("image").src = "pic_mountain.jpg";
</script>
*/
/*
<p id="demo"></p>

<script>
document.getElementById("demo").style.color= "red";
</script>
*/
function changeh1(input) {
    let h2 = document.getElementById('h2'); // não sei pq, mas se colocar innerText aqui, não vai dar certo
    h2.innerText = input.value;
}

function LinkOver(link){
    link.style.backgroundColor = 'red';
    console.log("passou");
}

function LinkOut(link){
    link.style.backgroundColor = 'blue';
}

console.log(`hjhvj`); // q viagem, funciona
var aei = 'ola mundo';
var bo = ' oii';
var soma= aei + bo;
console.log(soma); 
console.log('ola oi falou' + '\n' + `${2+2}` + ' mano do ceu'); // esse ` ` pode computar valores, aspas simples ñ vai
console.log('5' - 3);
console.log(+'5' + 10); // 15
console.log('5' + 10); //510
