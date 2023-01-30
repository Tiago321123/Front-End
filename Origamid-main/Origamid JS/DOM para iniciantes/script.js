function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    // se usar em outra página e não tiver nada nesses elementos, vai dar erro
    if (tabMenu.length && tabContent) {
        function active(index) {
            tabContent.forEach((section) => {
                section.classList.remove('active');
            });
            tabContent[index].classList.add('active');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', function () {
                active(index);
            });
        });
    }
}

initTabNav();

function animationUlFaq() {
    const accordionList = document.querySelectorAll('.js-accordion dt');

    if (accordionList.length) {
        // se existe, executo
        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        });

        accordionList[0].classList.add('active'); // o primeiro já aparecer
        accordionList[0].nextElementSibling.classList.add('active');

        function activeAccordion() {
            // accordionList.forEach((section) => {       esconde quando clico em outro item
            //     section.nextElementSibling.classList.remove('active');
            // });
            this.classList.toggle('active'); // active no dt
            this.nextElementSibling.classList.toggle('active'); // this faz referência ao item, ativo no próximo elemento, q é dd
        }
    }
}
animationUlFaq();

function linksInternosScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href'); // vai pegar o href em forma de texto
        const section = document.querySelector(href); // esse href vai ser um id, como "#contato"

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    /* outra forma de fazer

    const sectionTop = section.offsetTop;
    window.scrollTo({              // dois parâmetros (eixo x, eixo y);
        behavior: 'smooth',
        top: sectionTop
    })
    */
}
linksInternosScrollSuave();

const section = document.querySelectorAll('.js-scroll');

function initAnimacaoScroll() {
    function animationScroll() {
        section.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowMetadeTela = window.innerHeight * 0.6;

            if (sectionTop < windowMetadeTela) {
                section.classList.add('ativo');
            } else {
                // se quiser refazer a animação quando voltar pra cima
                section.classList.remove('ativo');
            }
        });
    }
    animationScroll(); // animação inicial

    window.addEventListener('scroll', animationScroll);
}
initAnimacaoScroll(); /*
Este código adiciona a classe "ativo" a todas as seções com a classe "js-scroll" 
quando elas estiverem visíveis na janela do navegador. Quando o usuário rolar para cima e a seção sair da janela, 
a classe "ativo" é removida.

Para melhorar este código, você pode adicionar uma verificação para verificar se a classe "ativo" já foi adicionada 
à seção antes de adicioná-la novamente. Isso evitará que a classe seja adicionada várias vezes se a seção já estiver
 visível na janela do navegador. Além disso, você pode usar a função "requestAnimationFrame" do JavaScript para garantir
  que a animação seja executada de forma sincronizada com a taxa de atualização da tela do usuário. Seu código ficaria assim:
  Este código parece ser uma função que inicializa uma animação de rolagem em elementos HTML com a classe "js-scroll". Quando o usuário rolar a página, a função "animationScroll" é chamada e adiciona a classe "ativo" a cada seção que estiver dentro de 60% da altura da janela do navegador.

  Algumas alterações que você pode fazer para melhorar o código são:
  
  Usar a função "addEventListener" apenas uma vez, no final da função "initAnimacaoScroll", em vez de chamá-la dentro da função "animationScroll".
  Adicionar um "else if" para verificar se a seção está fora da janela do navegador e remover a classe "ativo". Isso evitará que a classe seja adicionada novamente quando o usuário rolar a página de volta para cima.
  Armazenar a altura da janela do navegador em uma variável, em vez de calcular a altura toda vez que a função é chamada. Isso pode ajudar a evitar um possível impacto no desempenho.
*/
/*
Para criar microserviços em uma aplicação web com JavaScript, você pode usar uma biblioteca ou framework específico para 
desenvolvimento de microserviços, como o Express.js ou o Micro. Essas bibliotecas fornecem as ferramentas e recursos necessários 
para criar e gerenciar os serviços em sua aplicação web, incluindo rotas e métodos de solicitação e resposta, 
gerenciamento de erros e autenticação. Você também pode usar uma abordagem de desenvolvimento de software conhecida como 
"arquitetura em camadas" para dividir sua aplicação em serviços independentes e interconectados. Isso permite que você desenvolva 
e gerencie seus microserviços de forma eficiente e escalável.

Para criar microserviços em um site, você pode usar uma abordagem de desenvolvimento de software conhecida como 
"arquitetura em camadas". Nesta abordagem, o site é dividido em vários módulos ou serviços independentes, cada um 
responsável por uma tarefa específica. Por exemplo, um serviço pode ser responsável por gerenciar o acesso ao banco de dados,
 enquanto outro pode ser responsável por processar os dados enviados pelo usuário. Isso permite que o site seja desenvolvido 
 de forma modular e escalável, facilitando a manutenção e atualização do código.
*/
function calculaTopOcorrenciasDeQueries(texto, queries, k) {
    var quantItem = [];
    let number = 0;
    let indices = [];
    let queries2 = queries;
    for (let i = 0; i < queries.length; i++) {
        // let indices = [];
        let idx = texto.split(' ');

        idx.indexOf(queries[i]);
        while (idx != -1) {
            indices.push(idx);
            idx = idx.indexOf(queries[i], idx + 1);
        }
        console.log(indices);

        quantItem.push(idx.length);
        if (i > 0) {
            if (quantItem[i - 1] < quantItem[i]) {
                number = quantItem[i - 1];
                quantItem[i - 1] = quantItem[i];
                quantItem[i] = number;

                number = queries2[i - 1];
                queries2[i - 1] = queries2[i];
                queries2[i] = number;
            }
            if (quantItem[i - 2] < quantItem[i] && i > 1) {
                number = quantItem[i - 2];
                quantItem[i - 2] = quantItem[i];
                quantItem[i] = number;

                number = queries2[i - 2];
                queries2[i - 2] = queries2[i];
                queries2[i] = number;
            }
        }
    }
    console.log(quantItem);
    for (let i = 0; queries2.length > k.length; i++) {
        queries2.pop();
    }
    return queries2;
}

console.log(
    calculaTopOcorrenciasDeQueries(
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        ['a', 'em', 'i', 'el'],
        2
    )
);

function calculaPorcentagemSorteio(assinante, minutosAssistidos) {
    let soma = 0,
        chances = [];
    for (let a in minutosAssistidos) {
        minutosAssistidos[a] = Math.ceil(minutosAssistidos[a] / 60);
        if (assinante[a] == true) {
            minutosAssistidos[a] *= 2;
        }
        soma += minutosAssistidos[a];
    }
    for (let a in minutosAssistidos) {
        chances.push(minutosAssistidos[a] / soma);
    }
    // console.log(chances);
}
/*
calculaPorcentagemSorteio([true, false], [60, 120]);

function checaNumeroEscondido(numero, numeroOculto) {
    console.log(numero + ' ' + numeroOculto);
    numero = numero.toString();
    numeroOculto = numeroOculto.toString();
    numero = numero.split('');
    numeroOculto = numeroOculto.split('');

    console.log(numeroOculto);

    let cont = 0;
    for (let i in numero) {
        if (numero[i] == numeroOculto[cont]) {
            cont++;
        }
    }
    if (numeroOculto.length == cont) {
        return true;
    } else return false;
}

console.log(checaNumeroEscondido(1234, 235));
*/
function checaNumeroEscondido2(numero, numeroOculto) {
    numero = numero.toString();
    numeroOculto = numeroOculto.toString();
    return (
        numeroOculto.length ===
        numero.split('').filter((digito) => numeroOculto.includes(digito)).length
    );
}
console.log(checaNumeroEscondido2(1234, 235));
