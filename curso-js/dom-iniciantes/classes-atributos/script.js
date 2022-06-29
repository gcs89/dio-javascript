const menu = document.querySelector(".menu");
menu.classList.add("ativo");
menu.classList.remove("azul");


if(menu.classList.contains("azul")) {
    menu.classList.add("possui-azul");
} else {
    menu.classList.add("nao-possui-azul");
}

const animais = document.querySelector(".animais");
console.log(animais.attributes);

const img = document.querySelector("img");
console.log(img.getAttribute("src"));

const srcImg = img.getAttribute("alt");

img.setAttribute("teste", "É uma raposa")
console.log(srcImg);

const possuiAlt = img.hasAttribute("alt");
console.log(possuiAlt);
    
    