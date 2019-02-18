let css = document.querySelector('h3');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let body = document.querySelector('body');
let randomizerButton = document.querySelector('#randomizer-button');

function changeColor(event) {
    let gradient = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    body.style.background = gradient;
    css.textContent = gradient;
}

function generateRandomHexColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
}

function generateRandomGradient() {
    color1.value = generateRandomHexColor();
    color2.value = generateRandomHexColor();
    changeColor();
}

window.addEventListener('load', changeColor);
color1.addEventListener('input', changeColor);
color2.addEventListener('input', changeColor);
randomizerButton.addEventListener('click', generateRandomGradient);
