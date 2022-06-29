// Some 500 ao valor de scroll abaixo, 
// atribuindo o novo valor a scroll 
var scroll = 1000;

scroll += 500;

console.log(scroll)

// Atribua true para a variável darCredito, 
// caso o cliente possua carro e casa.
// E false caso o contrário.
var possuiCarro = false;
var possuiCasa = true; 
var darCredito;

var darCredito = (possuiCarro && possuiCasa) ? "Tem crédito" : "Não tem crédito";

console.log(darCredito)
