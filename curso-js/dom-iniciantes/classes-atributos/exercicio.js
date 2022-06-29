// // Adicione a classe ativo a todos os itens do menu
const novaClasseMenu = document.querySelectorAll(".menu a");

novaClasseMenu.forEach((item) => {
    item.classList.add("ativo");
});

// // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
novaClasseMenu.forEach((item) => {
    item.classList.remove("ativo");
});
novaClasseMenu[0].classList.add("ativo");


// Verifique se as imagens possuem o atributo alt
const img = document.querySelectorAll("img");

img.forEach((img) => {
    const temAlt = img.hasAttribute("alt");
    console.log(img, temAlt);
})  

// Modifique o href do link externo no menu

const link = document.querySelector("a[href^='http']");
link.setAttribute("href", "www.google.com");