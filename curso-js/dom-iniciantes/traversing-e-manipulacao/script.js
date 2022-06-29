// const h1 = document.querySelector("h1");
// h1.innerHTML = "<p>Novo Título</p>";

// const animaisLista = document.querySelector(".animais-descricao");
// // console.log(animaisLista.innerText);

// const lista = document.querySelector(".animais-lista");
// console.log(lista.previousElementSibling);

// const animais = document.querySelector(".animais");
// const contato = document.querySelector(".contato");
// const titulo = contato.querySelector(".titulo");
// const mapa = document.querySelector(".mapa");


// contato.replaceChild(lista, titulo);

// const novoH1 = document.createElement("h1");
// novoH1.innerText = "Este é um novo título";
// novoH1.classList.add("titulo-novo");

// mapa.appendChild(novoH1)
// console.log(novoH1); 

const h1 = document.querySelector("h1");
const faq = document.querySelector(".faq");
const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add("azul");
faq.appendChild(cloneH1);