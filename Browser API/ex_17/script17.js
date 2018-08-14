window.onload = function () {
    console.log('loaded');
}
let color = window.prompt('Please choose and input one of the following colors: green, blue, or red');
if (color == 'green') {
    const element = document.querySelector('a');
    const classList = element.classList.add('green');
}
else if (color == 'blue') {
    const element = document.querySelector('a');
    const classList = element.classList.add('blue');
}
else if (color == 'red') {
    const element = document.querySelector('a');
    const classList = element.classList.add('red');
}
else {
    window.prompt('that is not a valid color');
    
}
