function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color);
}

window.addEventListener('load', () => {
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        document.getElementById('colorPicker').value = savedColor;
    }
});

document.getElementById('applyColor').addEventListener('click', () => {
    const selectedColor = document.getElementById('colorPicker').value;
    setBackgroundColor(selectedColor);
});