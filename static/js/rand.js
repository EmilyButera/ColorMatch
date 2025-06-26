document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('generate-btn');
    const display = document.getElementById('random-color-display');

    function getRandomInt(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    function rgbToHex(r, g, b) {
        return "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    }

    function randomColor() {
        var r = getRandomInt(255);
        var g = getRandomInt(255);
        var b = getRandomInt(255);
        var hex = rgbToHex(r, g, b);
        display.textContent = hex;
        display.style.backgroundColor = hex;
    }

    btn.addEventListener('click', randomColor);

    // Optionally, show a random color on page load
    // randomColor();
});
