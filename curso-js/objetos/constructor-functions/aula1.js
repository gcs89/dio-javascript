// const carro = {
//     modelo: "teste",
//     valor:0,
// };

// const honda = carro;
// honda.modelo = "Honda";
// honda.valor = 2000;

// const fiat = carro;
// fiat.modelo = "Fiat";
// fiat.valor = 2500;

// FUNÇÃO CONSTRUTORA - começa com maiusculo e segue em camelcase

// function Carro() {
//     this.marca = "Marca";
//     this.preco = 2000;
//    console.log(this);
// };

function Carro(marcaAtribuida,precoAtribuido) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuido;
}
const honda = new Carro();
const fiat = new Carro();
fiat.marca = "Fiat";
fiat.preco = 3000;

function Carro2(marca,precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
};

const mazda = new Carro2("Mazda",5000)