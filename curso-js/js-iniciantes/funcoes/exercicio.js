// Crie uma função para verificar se um valor é Truthy

function souMedrosa (medo) {
    return !!medo;
}

// Crie uma função matemática que retorne o perímetro de um quadr
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado (lado) {
    return lado * 4;
}

console.log("A soma dos lados do quadrado é", perimetroQuadrado(8));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function meuNome (nome,sobrenome) {
    var nome = "Giorgia ";
    var sobrenome = "Santos";
    return nome + sobrenome;
}

console.log(meuNome());

// Crie uma função que verifica se um número é par


function numeroPar (seuNumero) {
    var modulo = seuNumero % 2;

    if (modulo === 0) {
        return true;
    }else {
        return false;
    }
}


// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function dadoArgumento (dado) {
    return typeof dado;
}


// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callb
// utilize essa função para mostrar no console o seu nome complet
// quando o evento 'scroll' ocorrer.

addEventListener("scroll", function() {
    console.log("Giorgia");    
});

 // Corrija o erro abaixo

 var totalPaises = 193;
 function precisoVisitar(paisesVisitados) {

    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
    }   
                                        
    function jaVisitei(paisesVisitados) {
        return `Já visitei ${paisesVisitados} do total de ${totalPaises}`;
            
        }
        
    console.log(precisoVisitar(20));
    console.log(jaVisitei(20));