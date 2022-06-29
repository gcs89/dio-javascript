const animais = document.getElementById("animais");
console.log(animais);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection[1]);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);


const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

primeiraUl.classList.add("grid-section")

const linkInterno = document.querySelector("[href^='#']");
console.log(linkInterno);

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg[0]);

const gridSectionHtml = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

console.log(gridSectionHtml);
console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index){
    console.log(item);
})

const arrayGrid = Array.from(gridSectionHtml);
arrayGrid.forEach(function(item,index){
    console.log(item);
})