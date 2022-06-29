// window.alert("Isso")

// tem que criar uma variavel pra acessar
const h1Selecionada = document.querySelector("h1");


// alert ("Isto é um metodo do objeto windows.")
// é o mesmo que escrever window.alert("texto").

const h1Classes = h1Selecionada.classList;

function callbackH1 () {
    console.log("Clicou em ", h1Selecionada.innerText);
}

h1Selecionada.addEventListener("click", callbackH1)