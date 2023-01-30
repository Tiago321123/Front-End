let pessoa = { // é um prototype do object, consegue usar os métodos do pai do objeto pessoa, que é o prototype
    maos: 2
}
console.log(Object.getPrototypeOf(pessoa));
console.log(Object.getPrototypeOf(pessoa) == Object.prototype);
console.log(pessoa.hasOwnProperty("maos")); // método do pai, prototype

// classes
let cachorro = {
    raca: 'SRD',
}
let pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = 'Pastor Alemão';
console.log(pastorAlemao);

// Construtores

function criarCachorro(raca) {
    let cachorro = Object.create({});
    cachorro.raca = raca;
    return cachorro;
}
let doberman = criarCachorro('Doberman');
console.log(doberman.raca);

function Cachorro(raca){
    this.raca=raca;
}
let husky = new Cachorro('Husky'); // instanciar um objeto com new
console.log (husky.raca);

Cachorro.prototype.uivar = function() {
    console.log("Auuuuu");
}
let pug = new Cachorro('Pug');
pug.uivar();


class Cachorra {
    constructor(raca){
        this.raca = raca;
    }
    ab = 9;
} 
let labrador = new Cachorra('Labrador');
console.log(labrador.raca);

// Não podemos adicionar propriedades na classe, só via prototype;
// A classe só aceita métodos;

class Cachorros{
 constructor (raca){
   this.raca=raca;
 }
 latir(){
   console.log("Au au");
 }
} 
Cachorros.prototype.patas = 4;
let poodle = new Cachorros('Poodle');
console.log(poodle.raca); 
console.log(poodle.patas);

Cachorros.prototype.raca = "SRD";
console.log(poodle.raca);
console.log(Cachorros.prototype.raca);