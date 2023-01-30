function qualquercoisa() {
    console.log('Hello World!');
    var ab = 5; // variável global
    ab = null; // esvazio, deleto o que estiver em ab
    let a = 1; // variável q pode ser lida apenas nesse bloco
    const y = 8; // constante, não se faz uma nova atribuição e nem edição
    const exemplo = ['Olá', 'Pedro'];
    exemplo.push('E aí');
    // push adiciona em um array, const eu posso modificar seu conteúdo se for array, objeto, mas não uma nova atribuição
    console.log(exemplo);

    const exemplo2 = {};
    console.log(exemplo2);
    exemplo2.nome = 'Maria';
    console.log(exemplo2);

    var cd = a + ab;
    var b = ++ab; // b = 1  primeiro ele incrementa e soma com o ab
    console.log(b);
    console.log(ab);
    b = ab++; // b recebe ab e depois é que ele incrementa o ab
    console.log(b); // tá valendo 1
    console.log(ab); // tá valendo 2

    var foo = 'Eu sou javascript';
    // != diferente, mas se for "3" e 3, ele vai dar como igual, !== vai dar "3" e 3 como diferentes,
    // aqui analisa o tipo do dado daí, o == e === também
    console.log(a > b);

    var ola = false;
    var oi = true;
    var ola = ola && oi; // ola e oi são true?
    console.log(ola);

    var idade = 10;
    var maior20 = idade > 20;
    var menor30 = idade < 30; // não presica usar o if que nem no c, faz direto, ele retorna booleano
    console.log(maior20);
    console.log(menor30);
    var entre = maior20 && menor30; // é vd q idade está entre 20 e 30
    console.log(entre);

    var ou = maior20 || menor30; // ou um é vd ou o outro é vd, senão vai ser false
    console.log(ou);
    /*
    var age = 20;
    var voteable = age < 18 ? 'Too young' : 'Old enough'; TOOPP
    alert(voteable);
    */
    var str = "hello world 'texto entre aspas simples' legal" + ' e aí';
    var str2 = 'hello world "texto entre aspas duplas" legal';
    console.log(str);
    console.log(str2);

    str += ' outro texto'; // adicionar string
    var numero = 2;
    var hel = 'hello world' + numero; // fica preto como string
    console.log(hel);
    console.log(numero); // fica azul como numero
    // if, else, switch case break, for, while mesmo q em C

    numero = Math.random(); // sorteio de 0 a 1
    console.log(numero);

    numero = Math.random() * 100; // sorteio de 0 a 100
    console.log(numero);

    var vetor = new Array('oi', 'Pedro', 'oba');
    vetor.reverse();
    console.log(vetor.length); // forma tradicional para varrer o array no for
    console.log(vetor[0]);

    for (var i in vetor) {
        console.log(vetor[i]); // normal, sai as strings
    }
    for (var i in vetor) {
        console.log(i); // sai a numeração
    }
    for (var i of vetor) {
        console.log(i); // normal, sai as strings
    }

    cd = qualquercoisa2(1);
    console.log(cd);
}

// nem precisa colocar o main, chama a funcao q vc quiser
qualquercoisa();

function qualquercoisa2(n1) {
    return '\nTeste ' + n1;
}
function testenome(nome) {
    console.log(`Meu nome é ${nome}`); // usar acento agudo (Template strings) do jeito que ele está, aparece no console
}
testenome('TIAGAOOOO');

var resultado1 = qualquercoisa2(3);
console.log(resultado1);

function saudacao() {
    return 'hello world';
}

var s = saudacao; // o s está funcionando como uma funcao, recebe a funcao saudacao()
console.log(s); // imprime a funcao toda por escrito
console.log(saudacao);
console.log(saudacao()); // imprime apenas o resultado q eu quero
console.log(s());

function media(n1, n2) {
    return (n1 + n2) / 2;
}

// métodos e objetos

var resultado = media(1, 3);
var m = media;
var resultado5 = m(3, 5); // m funcionou como um objeto, eu diria

console.log(resultado);
console.log(resultado5);

var media = function (n1, n2) {
    // assim também serve, já coloca a funcao em uma variável
    return (n1 + n2) / 2;
};
console.log(media(3, 3));

var media = (n1, n2) => {
    // esse é mais avançado
    return (n1 + n2) / 2;
};

function Media() {
    // só vai funcionar estando atribuida ao método do objeto, ou seja, usando aluno.metodoMedia()
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    // se eu quiser alterar a funcao metodoMedia,vou ter q alterar em todos os alunos q tiver
    nome: 'Pedro',
    nota1: 7,
    notas: [7, 9],
    /*
    metodoMedia: function(n1,n2){
        return (n1+n2)/2;
    }
    */
    metodoMedia: Media,
};
console.log(aluno.nota1);
console.log(aluno['nome']);

console.log(aluno.notas[0]);
console.log(aluno['notas'][0]);

var sobNome = 'sobrenome';
aluno.matricula = 1234567; // precisaria alterar depois no código
aluno['sobrenome'] = 'Souza';
aluno[sobNome] = 'Souza'; // consigo alterar a variável
console.log(aluno);
console.log(aluno.nome);
// console.log(aluno.metodoMedia(aluno.nota1, aluno.nota2));

var aluno1 = {
    // se eu quiser alterar a funcao metodoMedia,vou ter q alterar em todos os alunos q tiver
    nome: 'André',
    nota1: 8,
    notas: [9, 5],
    /*
    metodoMedia: function(n1,n2){
        return (n1+n2)/2;
    }
    */
};
console.log(aluno.metodoMedia());
// Media(); vai dar erro, ñ dá

// Construtores

function criarAluno(nome, n1, n2) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function () {
            return (this.nota1 + this.nota2) / 2;
        },
    };
}

function aluno4(nome, n1, n2) {
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function media() {
        // e não function media() apenas
        return (this.nota1 + this.nota2) / 2;
    };
}
/*
var calcMedia = function(){
    return (this.nota1 + this.nota2)/2;
}
*/
/*
var turma = [ // tem q ser em colchetes pra fazer agrupamentos:

    {
        nome:"Igor",
        nota1:5,
        nota2: 8,
        media: calcMedia
    },

    {
        nome:"Joao",
        not1:6,     // imagina só fazer isso pra cadastrar vários alunos, pode acabar errando e é trabalhoso.
        nota2:9,
        media: calcMedia
    }
]
*/
//var aluno = turma[0];
/*
var turma = [
    criarAluno("André",9,3),
    criarAluno("Ana",4,7),
    criarAluno("Pedro", 7, 9)
]
var aluno = turma[1]; // seleciona o 2 criarAluno
console.log(aluno.media()); // primeiro vai na funcao criarAluno selecionada e acessa a funcao media()
*/
var a = new aluno4('Rubens', 6, 8);
console.log(a);
console.log(a.media());
var a = new aluno4('André', 1, 8);
console.log(a);
console.log(a.media());
/*
turma.forEach(function (element){ // varrer o array, cada element do array turma

    console.log(element.nome + " - " + element.media());
})

// ou então 
for(var aluno of turma){
    console.log(aluno.media());
}
// Até aqui foi construtores
*/

// Objetos resumo

var a = {}; // objeto vazio
var b = [
    // array com vários objetos, se tem [] é array
    {
        nome: 'pedro',
        idade: 15,
    },
    {
        nome: 'Tiago',
    },
];
var ac = b[1]; // em js tudo é objeto
console.log(ac['nome']); // ou console.log(ac.nome)

function obj(nome1, sobrenome1) {
    return {
        // retorna objetos
        nome: nome1,
        sobrenome: sobrenome1, // nome é o objeto e nome1 é o valor que ele recebe
    };
}
var a = obj('ana', 'clara');
console.log(a);
// var h= Math.round(Math)
function obj1(n, s) {
    this.nome = n;
    this.sobrenome = s;
}

var b = new obj1('mano', 'pereira'); // tem q usar o new daí
console.log(b);

// DATAS

var d = new Date(2018, 7, 15, 14, 14, 14); // janeiro = 0, dezembro = 11, mas isso é só aqui, se tiver "" fica normal
// new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);

console.log(d);
d = new Date(0);
console.log(d);

d = new Date('sep 07 2019 23:30:23'); // vai certinho, funciona
console.log(d);
// ou então
d = new Date('9 07 2019 23:30:23');
console.log(d);

d = new Date('07/20/2005 23:00'); // ou também 05-14-2005, por estar entre "" o 7 vai ser julho mesmo
console.log(d);
console.log(d.getFullYear());
console.log(d.getDay()); // dia da semana 0 = domingo 6 = sábado
console.log(d.getHours());
console.log(d.getMinutes());
var ab = d.getTime(); // milissegundos desde 1970 até essa data
console.log(ab);

var dias = ['Dom', 'Seg', 'Terc', 'Quar', 'Quin', 'Sex', 'Sab'];
console.log(dias[d.getDay()]);
// ele lê nessa data e vê q o dia é quarta, dígito 3, aí ele vai no array e pega o elemento 3, que é Quart
console.log(d);
console.log(d.setHours(12)); // primeiro eu mudo o q eu quero usando o set e depois é que imprimo a mudança
console.log(d); // aqui aparece a mudanca feita

console.log(d.setDate(15));
console.log(d.setFullYear(2020)); // muda o ano para 2020
console.log(d);

// var, let e const lá em cima
// e assim termina o Javascript básico


// CURSO JS BÁSICO DO MATEUS

// CURSO JS BÁSICO DO MATEUS

console.log(!true);
console.log(true);
console.log(5 > 2 ? "É sim" : "É não"); // NÃO USE. é true ou false?, true : false

for(let a=0; a<5; a++){
    if(a==0){
        console.log('teste');
        continue; // vai parar aqui e voltar para o loop
        console.log('nao vai');
    }
    else 
    console.log('quebrou')
    break; // vai parar todo loop
    console.log('nao vai');
}

var x = 10;

if(true){
    var x = 20;
    console.log(x); // escopo do if
}
console.log(x); // escopo global

let soma = (a,b) => { // arrow function
    return a + b;
}
console.log(soma(2,56)); 