// Transforme o objeto abaixo em uma Constructor Function
// function Pessoa(nome,idade){ 
//     this.nome = 'Nome pessoa';
//     this.idade = 0;

//     function andar(){
//     console.log(this.nome + ' andou'); }
// }

function Pessoas(nome,idade){
    this.nome = nome;
    this.idade = idade;
    this.andar = function(){
        console.log(this.nome + " andou");
    }
};

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos


const pessoa1 = new Pessoas("João",20);
const pessoa2 = new Pessoas("Maria",25);
const pessoa3 = new Pessoas("Bruno",15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

// function Dom(elements){
//     this.elements = function (){
//         return document.querySelector(elements);
//     }
//     this.ativar = function(){
//         this.elements().classList.add("ativar");
//     }
//     this.remover = function(){
//         this.elements().classList.remove("ativar");
//     }
// }

// const li = new Dom("li");

function Dom(selector){
    const elementlist = document.querySelectorAll(selector);
    this.elements = elementlist;
    this.addClass = function(classe){
        elementlist.forEach((element) => {
            element.classList.add(classe);
        })
    }
    this.removeClass = function(classe){
        elementlist.forEach((element) => {
            element.classList.remove(classe);
        })
    }

};

const listaItems = new Dom("li");
const ul = new Dom("ul");