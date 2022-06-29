// var pessoa = {
//     nome: "Gi",
//     idade: 33,
// }

// console.log(pessoa.idade);

// primeiro metodo: função inteira
/*var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function (lado) {
        return this.lados * lado;
    },
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(4)); */

//segundo metodo: função abreviada

/*
var quadrado = {
    lados: 4,
    area(lado) {
        return lado * lado;
    },
    perimetro(lado) {
        return this.lados * lado;
    }
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(4)); */

var height = 500;
var menu = {
    width: 800,
    height: 50,
    backgroundColor: "#84e",
    metadeHeight () {
        return this.height / 2;
    }
}
menu.backgroundColor = "#000";
menu.color = "blue";
menu.esconder = function(){
    console.log("Escondi.");
}
var bg = menu.backgroundColor;

// this

// var height = 120; 
// var menu = {
//     width: 800,
//     height: 50,
//     metadeHeight() {
//     return this.height / 2; 
//     }
//   }

//   menu.metadeHeight()