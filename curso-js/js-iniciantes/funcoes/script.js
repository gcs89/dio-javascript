// function areaQuadrado (lado) {
//     return lado * lado;
// }

// console.log(areaQuadrado(10));

// function imc (peso,altura) {
//     var imc = peso / (altura * altura);
//     return imc;
// }

// console.log(imc(80, 1.8));

// function corFavorita (cor) {
//     if(cor === "Azul") {
//         return "Eu gosto do céu";
//     } else if (cor === "Verde") {
//         return "Eu gosto de comer folhas";
//     } else {
//         return "Eu sou daltonico.";
// }   
//     }

// PARAMETROS COM FUNÇÕES

//addEventListener("click", function() { console.log("Oiiii")});

// function mostraConsole () {
//     console.log("oiiii");
// }

// addEventListener("click", mostraConsole);

// function terceiraIdade (idade) {
//     if (typeof idade !== "number") {
//         return "Por favor, responda com um número."
//     } else if (idade >= 60) {
//         return true;
//     } else {
//         return false;
//     }
// }
   

// console.log(terceiraIdade(33));



// function faltaVisitar (paisesVisitados) {
//     var totalPaises = 193;
//     return `Falta visitar ${totalPaises - paisesVisitados} países.`
// }

// console.log(totalPaises);

var profissao = 'Designer';

function dados() {
    var nome = 'André';
    var idade = 28; 
    function outrosDados() {
        var endereco = 'Rio de Janeiro';
        var idade = 29;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados(); 

}

console.log(dados());
//outrosDados(); // retorna um erro porque não foi definida 