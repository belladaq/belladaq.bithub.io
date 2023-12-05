
let wordB = document.querySelector('.b');

function changeTextB() {
    wordB.textContent = 'A historical bench that was once owned by the Medici family from the 15th Century. This bench is engraved with the Florentine crest which represents the powerful Italian political family. The Medici family, also known as House of Medici, held power in Florence from the 15th to the 18th Century.'
}

let wrap = document.querySelectorAll('.wrap');

let button = document.querySelector('.ff');

button.onclick = changeTextB;

