// const adder = new Function('a', 'b', 'return a + b');

// console.log(adder(2,6));

// const sayHello = new Function('return function (name) { return `Hello, ${name}` }')();
// console.log(sayHello('world'));

function Carro(marcaAtribuida, precoAtribuido){
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
};

const honda = new Carro("Honda", 2000);
const fiat = new Carro("Fiat", 1000);

console.log(honda);
console.log(fiat);