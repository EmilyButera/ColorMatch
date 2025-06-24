document.addEventListener('DOMContentLoaded', function() {
    var body = document.body, 
        r = document.querySelector('#r'),
        g = document.querySelector('#g'),
        b = document.querySelector('#b'),
        r_out = document.querySelector('#r_out'),
        g_out = document.querySelector('#g_out'),
        b_out = document.querySelector('#b_out'),
        hex_out = document.querySelector('#hex');
    var hexadic1_out = document.querySelector('#hexadic1');
    var hexadic2_out = document.querySelector('#hexadic2');
    var hexadic3_out = document.querySelector('#hexadic3');
    var hexadic4_out = document.querySelector('#hexadic4');
    var hexadic5_out = document.querySelector('#hexadic5');

    function rgbToHsl(r, g, b) {
        r /= 255; g /= 255; b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
        if (max === min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        return [h * 360, s, l];
    }

    function hslToRgb(h, s, l) {
        var r, g, b;
        h = h % 360;
        if (h < 0) h += 360;
        h /= 360;
        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            var hue2rgb = function(p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1/6) return p + (q - p) * 6 * t;
                if (t < 1/2) return q;
                if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
                return p;
            };
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            var p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1/3);
        }
        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    }

    function rgbToHex(r, g, b) {
        return "#" + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
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

      // Calculate hexadic colors (60, 120, 180, 240, 300 degree hue shifts)
      var hsl = rgbToHsl(rVal, gVal, bVal);
      var hexadicHues = [hsl[0] + 60, hsl[0] + 120, hsl[0] + 180, hsl[0] + 240, hsl[0] + 300];
      var hexadics = hexadicHues.map(function(hue) {
        var rgb = hslToRgb(hue, hsl[1], hsl[2]);
        return rgbToHex(rgb[0], rgb[1], rgb[2]);
      });
      hexadic1_out.textContent = hexadics[0];
      hexadic1_out.style.backgroundColor = hexadics[0];
      hexadic2_out.textContent = hexadics[1];
      hexadic2_out.style.backgroundColor = hexadics[1];
      hexadic3_out.textContent = hexadics[2];
      hexadic3_out.style.backgroundColor = hexadics[2];
      hexadic4_out.textContent = hexadics[3];
      hexadic4_out.style.backgroundColor = hexadics[3];
      hexadic5_out.textContent = hexadics[4];
      hexadic5_out.style.backgroundColor = hexadics[4];

      // Update the small output boxes
      r_out.textContent = r.value;
      g_out.textContent = g.value;
      b_out.textContent = b.value;
    }

    r.addEventListener('change', setColor, false);
    r.addEventListener('input', setColor, false);
    g.addEventListener('change', setColor, false);
    g.addEventListener('input', setColor, false);
    b.addEventListener('change', setColor, false);
    b.addEventListener('input', setColor, false);

    // Initialize on page load
    setColor();
});