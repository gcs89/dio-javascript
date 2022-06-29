
// loop - for
// for (var numero = 0; numero <10; numero++) {
//     console.log(numero);
// }

// loop - while
// var i = 0;
// while (i <= 100) {
//     console.log(i);
//     i = i + 5;
// }

var videoGames = ["Xbox", "Switch", "PS4", "3DS"];

for (var item = 0; item < videoGames.length; item++) {
    console.log(videoGames[item]);
    if (videoGames[item] === "PS4") {
        break;
    }
}

// for each: parece um array, mas não é um array

var frutas = ["banana", "uva", "manga", "morango"];

frutas.forEach(function(item,index,array){
    console.log(item,index,array);

});