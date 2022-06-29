function Pessoa (nome,idade){
    this.nome = nome;
    this.idade = idade;
    this.abracar = function () {
        return this.nome + " abraçou";
    };
    this.andar = function() {
        return "Andou pelo objeto";
    };
};

const andre = new Pessoa("Andre", 28);

Pessoa.prototype.andar = function() {
    return this.nome + " andou";
};

Pessoa.prototype.nadar = function() {
    return this.nome + " nadou";
};


// console.log(Pessoa.prototype);
// console.log(andre.prototype);

const pais = "Brasil";
const cidade = new String("Rio");

const listaAnimais = ["cachorro", "gato", "cavalo"];

const lista = document.querySelectorAll("li");
const listaArray1 = Array.prototype.slice.call(lista);
const listaArray2 = Array.from(lista);

const Carro = {
    marca: "ford",
    preco: 2000,
    andar() {
        return "oiii";
    },
}; 