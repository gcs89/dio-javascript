const listaAnimais = document.querySelector(".animais-lista");

const height = listaAnimais.scrollHeight;
console.log(height);

const animaisTop = listaAnimais.offsetTop; //console.log(rect.top);
console.log(animaisTop);


const primeiroH2 = document.querySelector("h2");
const h2Left = primeiroH2.offsetLeft;

const rect = primeiroH2.getBoundingClientRect();
console.log(rect.height);

console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerWidth,
    window.outerHeight,
    window.pageYOffset,
    
)

const small = window.matchMedia("(max-width: 600px)").matches;

if(small) {
    console.log("Usuário mobile");
}else {
    console.log("Usuário desktop.")
}

console.log(small);