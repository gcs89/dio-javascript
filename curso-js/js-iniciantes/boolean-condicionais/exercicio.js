// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual
var minhaIdade = 33;
var idadeParente = 16;

if (minhaIdade > idadeParente) {
    console.log("Eu sou mais velha do que meu parente");
} else if (minhaIdade === idadeParente) {
    console.log("Temos a mesma idade");
} else {
    console.log("Eu sou mais nova");
}


// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // true


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //true
var idade = 28; //true
var possuiDoutorado = false; // false 
var empregoFuturo; // false
var dinheiroNaConta = 0; //false

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta);

// Compare o total de habitantes do Brasil com China (valor em milhões
var brasil = 207;
var china = 1340;

if (brasil > china) {
    console.log("O total de habitantes do Brasil é maior do que o da China");
} else if (brasil === china) {
    console.log ("O total de habitantes do Brasil e da China são iguais.");
} else {
    console.log ("O Brasil tem menos habitantes do que a China");
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
    console.log('Verdadeiro');
  } else {
    console.log('Falso');
  } // falso

  // O que irá aparecer no console?
  if(('Gato' === 'gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
  } else {
    console.log('Falso');
  } // cao