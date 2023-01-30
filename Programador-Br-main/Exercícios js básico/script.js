function CalcularPerímetro(raio) {
    return (2 * Math.PI * raio);
}

const CalcularÁrea = raio => Math.PI * raio ** 2; // arrow function

function Question1() {
    let raio = document.getElementById("raio").value;
    console.log(raio);
    let perimetro = document.getElementById("perimetro");
    let area = document.getElementById("area");

    perimetro.value = Math.round(CalcularPerímetro(raio) * 100)/100;
    area.value = Math.round(CalcularÁrea(raio) * 100)/100;
}

function clickme(){
    console.log("ola mundo");
    document.getElementById("p").innerText = "sddgdsd";
}

function Temperatura(celsius,fahrenheit){
    if(celsius!=null){
    return (9/5)*celsius + 32;
    }
    else 
    return 5/9 * (fahrenheit- 32);
}

function Question2Celsius(){
    let celsius = document.getElementById("celsius").value;
    document.getElementById("fahrenheit").value = Temperatura(celsius,0);
}

function Question2Fahrenheit(){
    let fahrenheit = document.getElementById("fahrenheit2").value;
    document.getElementById("celsius2").value = Temperatura(null,fahrenheit);
}

function Question3(){
    let gasolina = document.getElementById("gasolina").value;
    let kilometros = document.getElementById("km").value;
    let dinheiro = document.getElementById("dinheiro").value;

    let litroComprar = dinheiro/gasolina;
    let kmAndar = litroComprar * kilometros;

    document.getElementById("litros").value = litroComprar;
    document.getElementById("kms").value = kmAndar;
}

function Question4(){
    let notas = document.getElementById("notas").value;
    let arrayNotas = notas.split(" "); // esse split é MUIITO BOMM, divide em um array até onde vc quer 
    let soma=0;
    var a;

    for(a=0; a < arrayNotas.length; a++){
    soma = +arrayNotas[a] + soma; // soma e +arrayNotas[a] transforma a string em number
    }
    var media = soma / a; // media
    document.getElementById("media").value = media;
}

function Question5(){
    let numbers = document.getElementById("numbers").value;
    let arrayNumbers = numbers.split(" "); // esse split é MUIITO BOMM, divide em um array até onde vc quer 
    var a;

    for(a=0; a < arrayNumbers.length; a++){
    arrayNumbers[a] = arrayNumbers[a]**2; // soma e +arrayNotas[a] transforma a string em number
    }
    document.getElementById("quadrado").value = arrayNumbers;
}

function Question6(){
    let numbers2 = document.getElementById("numbers2").value;
    console.log(numbers2);
    let arrayNumbers = numbers2.split(" "); 
    var a, maior;

    for(a=0; a < arrayNumbers.length; a++){
        if(a==0){
        maior = arrayNumbers[0];
        }
        else
        if(maior < arrayNumbers[a]){
            maior = arrayNumbers[a];
        }
        console.log(maior);
        console.log(arrayNumbers[a]);
    }
    document.getElementById("maior").value = maior;
    a=0;

    arrayNumbers = null;
}