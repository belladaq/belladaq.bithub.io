
function changeBackground() {
    const background = document.querySelector("body");
    let randomHue = Math.floor(Math.random() * 255);
    background.style.backgroundColor = "rgb(" + randomHue + ", 64, 44)";
}

let button = document.querySelector("button");
button.onclick = changeBackground;
