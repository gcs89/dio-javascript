// Retorne o url da página atual utilizando o objeto window
const urlAtual = window.location.href;
console.log ("A URL atual é :", urlAtual);
// Seleciona o primeiro elemento da página que
// possua a classe ativo

const classeAtivo = document.querySelector(".ativo");
console.log(classeAtivo)
// Retorne a linguagem do navegador
const linguagem = window.navigator.language;
console.log("A linguagem do navegador é: ", linguagem);
// Retorne a largura da janela
const larguraJanela = window.innerHeight;
console.log("A largura da janela é ",larguraJanela, "px");