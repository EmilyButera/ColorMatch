document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById('generate-btn');
    const display = document.getElementById('random-color-display');
    const colorCount = document.getElementById('color-count');

    function getRandomInt(max) {
        return Math.floor(Math.random() * (max + 1));
    }

    function rgbToHex(r, g, b) {
        return "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    }

    function randomColor() {
        var n = parseInt(colorCount.value, 10) || 1;
        display.innerHTML = '';
        for (var i = 0; i < n; i++) {
            var r = getRandomInt(255);
            var g = getRandomInt(255);
            var b = getRandomInt(255);
            var hex = rgbToHex(r, g, b);
            var box = document.createElement('div');
            box.textContent = hex;
            box.style.backgroundColor = hex;
            box.style.margin = '0 4px';
            box.style.width = '120px';
            box.style.height = '60px';
            box.style.lineHeight = '60px';
            box.style.textAlign = 'center';
            box.style.fontSize = '1.2em';
            box.style.fontWeight = 'bold';
            box.style.borderRadius = '10px';
            box.style.color = '#fff';
            box.style.display = 'inline-block';
            display.appendChild(box);
        }
    }

    btn.addEventListener('click', randomColor);

    // Optionally, show a random color on page load
    // randomColor();
});
