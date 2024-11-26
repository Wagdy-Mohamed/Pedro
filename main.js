var background = document.getElementById("background");

function generateRandomColor(){
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`
}

function changeColor(){
    var randomColor = generateRandomColor();
    background.style.backgroundColor = randomColor;
}
function keepRepeating(){
    setInterval(changeColor, 100);
}