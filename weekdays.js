let day = new Date().getDay();

console.log('Day: ' + day);

let words = document.getElementById("words");

if (day == 0){
    words.textContent = 'Happy Sunday!'
}
else if (day == 1){
    words.textContent = 'Happy Monday!'
}
else if (day == 2){
    words.textContent = 'Happy Tuesday!'
}
else if (day == 3){
    words.textContent = 'Happy Wednesday!'
}
else if (day == 4){
    words.textContent = 'Happy Thursday!'
}
else if (day == 5){
    words.textContent = 'Happy Friday!'
}
else if (day == 6){
    words.textContent = 'Happy Saturday!'
}
