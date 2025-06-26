document.addEventListener('DOMContentLoaded', function() {
    var body = document.body, 
        r = document.querySelector('#r'),
        g = document.querySelector('#g'),
        b = document.querySelector('#b'),
        r_out = document.querySelector('#r_out'),
        g_out = document.querySelector('#g_out'),
        b_out = document.querySelector('#b_out'),
        hex_out = document.querySelector('#hex');
    var complimentary_out = document.querySelector('#complimentary');
    var hex_input = document.querySelector('#hex_code');

    function pad(n){
      return (n.length<2) ? "0"+n : n;
    }

    function rgbToHex(r, g, b) {
      return "#" + pad(r.toString(16)) + pad(g.toString(16)) + pad(b.toString(16));
    }

    function hexToRgb(hex) {
      hex = hex.replace(/^#/, '');
      if (hex.length === 3) {
        hex = hex.split('').map(x => x + x).join('');
      }
      if (hex.length !== 6) return null;
      var num = parseInt(hex, 16);
      return [
        (num >> 16) & 255,
        (num >> 8) & 255,
        num & 255
      ];
    }

    function setColor(){
      var rVal = parseInt(r.value, 10),
          gVal = parseInt(g.value, 10),
          bVal = parseInt(b.value, 10);
      var hex = rgbToHex(rVal, gVal, bVal);
      hex_out.textContent = hex;
      hex_out.style.backgroundColor = hex;
      hex_out.style.display = "inline-block";
      hex_out.style.width = "100px";
      hex_out.style.height = "40px";
      hex_out.style.lineHeight = "40px";
      hex_out.style.textAlign = "center";
      hex_out.style.color = "#fff";
      hex_out.style.fontWeight = "bold";
      hex_out.style.borderRadius = "8px";
      hex_out.style.marginTop = "10px";

      // Complimentary color
      var compR = 255 - rVal,
          compG = 255 - gVal,
          compB = 255 - bVal,
          compHex = rgbToHex(compR, compG, compB);
      complimentary_out.textContent = compHex;
      complimentary_out.style.backgroundColor = compHex;
      complimentary_out.style.display = "inline-block";
      complimentary_out.style.width = "100px";
      complimentary_out.style.height = "40px";
      complimentary_out.style.lineHeight = "40px";
      complimentary_out.style.textAlign = "center";
      complimentary_out.style.color = "#fff";
      complimentary_out.style.fontWeight = "bold";
      complimentary_out.style.borderRadius = "8px";
      complimentary_out.style.marginTop = "10px";

      // Update the small output boxes
      r_out.textContent = r.value;
      g_out.textContent = g.value;
      b_out.textContent = b.value;

      // Update hex input field if needed
      if (hex_input !== document.activeElement) {
        hex_input.value = hex;
      }
    }

    // When sliders change, update everything
    r.addEventListener('input', setColor, false);
    g.addEventListener('input', setColor, false);
    b.addEventListener('input', setColor, false);

    // When hex input changes, update sliders and color
    hex_input.addEventListener('input', function() {
      var rgb = hexToRgb(hex_input.value.trim());
      if (rgb) {
        r.value = rgb[0];
        g.value = rgb[1];
        b.value = rgb[2];
        setColor();
      }
    });

    // Initialize on page load
    setColor();
});