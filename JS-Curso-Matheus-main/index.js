// Closure, função q se lembra do ambiente em q foi criada
function armazenarSoma(x){
    return function(y){ // retorna a função para a variável soma1
        return x + y;
    }
}

let soma1 = armazenarSoma(3); // recebe a function
console.log(soma1(5)); // executa ela
let soma2 = armazenarSoma(5);
console.log(soma2(10));
 
// RECURSÃO  ela se auto-invoca

function retornarNumeroPar(n){
    if(n % 2 == 0){
        console.log("n agora é par: " + n);
    }
    else{
    console.log(n);
    retornarNumeroPar(n-1);
    }
}
retornarNumeroPar(23);
  
function recursao(n){
    if(n - 1 < 2){
        console.log("Recursão parou");
    }
    else if(n % 2 != 0){
        console.log("Número ímpar "+n);
        recursao(n - 1);
    }else {
        console.log("Número par "+ n);
        recursao(n-2);
    }
}

recursao(2);

let str = 'o laoha';
console.log(str.length); // propriedade é uma informação q pode ser verificada de um valor

// MÉTODOS são propriedades que funcionam como funções
console.log(str.toUpperCase());

// string.propriedade
// string.metodo()

// Objetos, coleção de propriedades, parecido com array
let hello = {
    nome: "Pedro",
    idade: 18,
    sobrenome: "Costa",
    chavePropriedade: 'Propriedade',
    func: function(n){ // é um método
        console.log('numero ' +n);
    }
};

console.log(hello.nome);
hello.func(3);  // quando é pra executar function sem return, ñ precisa de console.log();

console.log(hello.idade);
delete hello.idade; // deleta

hello.novaPropriedade = 'fala rapaziada';
console.log(hello)

let objetoB = {
    anos: 34
}

Object.assign(hello, objetoB); // passei as propriedades de objetoB para hello
console.log(hello)

console.log(Object.keys(hello));//retorna um array com os nomes das propriedades do objeto, VERIFICAR SE O OBJETO TEM TAL CHAVE 
// IMPORTANTE: CHAVE É O NOME DA PROPRIEDADE

// MUTAÇÃO (MUTABILITY)
let pessoa = {
    nome: "Mateus"
}

let pessoa3 = {
    nome: "Mateus"
}

let pessoa2 = pessoa; // se mudo em um, mudo no outro também
console.log(pessoa2 === pessoa);
console.log(pessoa3 == pessoa) // não estão ligados

pessoa2.nome ="Pedro";
console.log(pessoa.nome);

pessoa.nome= "Maria";
console.log(pessoa2.nome);
console.log(pessoa);
console.log(pessoa2);


////////////////////////                Métodos de arrays                    ///////////////////////

let numeros = [1, 2, 3, 4, 5, 45, 67, 124];

numeros.push(30,"Anna"); // adiciona elements no fim de um array 
console.log(numeros);

let nomeRemovido = numeros.pop(); // remove o ultimo elemento e o coloca na variável
console.log(nomeRemovido);

// unshift shift é o contrário, adiciona e remove no primeiro elemento

numeros.unshift("first",4); // adiciona no início
console.log(numeros);
numeros.shift(); // remove o primeiro
console.log(numeros);

// indexOf

console.log(numeros.indexOf(4)); // show index of first element 4
console.log(numeros.lastIndexOf(4)+'\n'); // show index of last element 4


// slice retorna um array com início e fim do indíce informado
console.log(numeros.slice(2,5)); // [2,3,4] começa no 3 elemento e vai até o 5
console.log(numeros.slice(3)); // vai apartir do 4 elemento


numeros.forEach(num => { // para cada elemento do array faça:
    console.log(num);
})

// includes retorna booleano, achar tal valor no array
let carros = ["gol \n ", 'mercedes', 'fusca'];
console.log(carros.includes('fusca'));

if(carros.includes('fusca')){
    console.log("Existe fusca");
}
else console.log("Não existe fusca");

console.log(carros.reverse()); // reverse array


// MÉTODOS DE STRING

// TRIM
let abc = '    dhgd   eeh   '; // remove esses espaços dos lados
console.log(abc.trim()); // "dhgd   eeh"


// PADSTART  inserir caracteres antes da string
let milAoContrario = '1';
console.log(milAoContrario.padStart(4,'0')); // repetir a string no início 4 vezes

let firstSplit = 'dgdf gdfg dfgdfg df';
let resultado = firstSplit.split(' ');
console.log(resultado);

console.log(resultado.join(' ')); // é o contrário de split, vai unir os element do array com ' ' no meio, fazendo uma string

console.log('teste '.repeat(5)); // repeat 5 times string


// REST OPERATOR

let num1 = 4;
let num2 = 5;
let num3 = 6;
let num4 = 7;

function printNumbers(...args){
    for(let a = 0; a < args.length; a++){
        console.log(args[a]); // o args vai vim na forma de array
    }
}

// quando é pra executar function, ñ precisa de console.log(); console.log(printNumbers(num1, num2, num3, num4));
printNumbers(num1, num2, num3, num4);
console.log("pausa");
printNumbers(45,34,76,12,4,6,8,3);


// Destructuring with objetos

const person = {
    nome: "Mateus",
    idade: 14
};
const {nome: nm, idade: ida} = person; // passar os valores para uma variavel;
console.log(nm);
console.log(ida);

// Destructuring with array

let nomes = ["andre","Pedro", "Mateus", 4];
let [nome1, nome2,nome3, number4] = nomes;
// definir variáveis para cada elemento do array

console.log(nome1);
console.log(nome2);
console.log(nome3);
console.log(number4);

// JSON 

let personText = JSON.stringify(person);
console.log(personText + "  type string, json");
// console.log(personText.nome) não dá, é string, não objeto

let personJson = JSON.parse(personText);
console.log(personJson); // type object
console.log(personJson.idade);

console.log(Object.keys(person));


// EXERCÍCIO
 
let calculadora = {
    somar : function (n1,n2) {  // somar é um método
        console.log(n1+n2);
    },
    subtrair : function (n1,n2) {
        console.log(n1-n2);
    },
    multiply : function (n1,n2) {
        console.log(n1*n2);
    },
    divisao : function (n1,n2) {
        console.log(n1/n2);
    }
} 
calculadora.somar(3,5);
calculadora.subtrair(3,5);
calculadora.multiply(8,5);
calculadora.divisao(8,5);