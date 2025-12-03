const image = document.querySelector("#image");
const textOne = document.querySelector("#text-one");
const textTwo = document.querySelector("#text-two");
const button = document.querySelector("#button")
const text = [
    {
        p1: "comme souvent, cette histoire commence dans une auberge...",
        p2: "Celle-ci est miteuse, inquiètante, perdue au fin fond du marais sans retour, pas de quoi effrayer de vaillants aventuriers"
    },
    {
        p1: "La crypte se cachait au fond de la cave et d'inquiètant murmures sans echappait",
        p2: "Prêts à en découdre, les aventuriers fourbirent leurs armes et grimoires."
    },
    {
        p1: "La créature surgie des enfers se dressait devant les héros, dernier obstacle devant le trésor du nécromancien",
        p2: "Le combat allait être sans merci!"
    }
];
const imagePath= [
    "./asset/image/image1.png",
    "./asset/image/image2.webp",
    "./asset/image/image3.webp"
];

let count = 0;

function changeImage() {
    count++;
    
    image.src = imagePath[count%3];
    textOne.textContent = text[count%3].p1;
    textTwo.textContent = text[count%3].p2;
}

button.addEventListener("click", changeImage);
