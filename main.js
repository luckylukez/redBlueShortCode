let isBlue = true;
    
const textElement = document.getElementById('text');

function changeTextColor(){
    isBlue = !isBlue;
    let col;
    isBlue ? col='blue' : col='red';
    textElement.style.color = col;
}

textElement.addEventListener('click', changeTextColor);