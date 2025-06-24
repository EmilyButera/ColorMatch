document.addEventListener('DOMContentLoaded', function() {
    var r = document.querySelector('#r'),
        g = document.querySelector('#g'),
        b = document.querySelector('#b'),
        r_out = document.querySelector('#r_out'),
        g_out = document.querySelector('#g_out'),
        b_out = document.querySelector('#b_out'),
        hex_out = document.querySelector('#hex');
    var triadic1 = document.querySelector('#triad1');
    var triadic2 = document.querySelector('#triad2');

    function setColor(){
      var rVal = parseInt(r.value, 10),
          gVal = parseInt(g.value, 10),
          bVal = parseInt(b.value, 10);
      var r_hex = rVal.toString(16),
          g_hex = gVal.toString(16),
          b_hex = bVal.toString(16),
          hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
      hex_out.textContent = hex;
      hex_out.style.backgroundColor = hex;
      r_out.textContent = r.value;
      g_out.textContent = g.value;
      b_out.textContent = b.value;

      // Convert to HSL
      var hsl = rgbToHsl(rVal, gVal, bVal);
      // Triadic colors: rotate hue by +120 and +240
      var h1 = (hsl[0] + 120) % 360;
      var h2 = (hsl[0] + 240) % 360;
      var tri1 = hslToRgb(h1, hsl[1], hsl[2]);
      var tri2 = hslToRgb(h2, hsl[1], hsl[2]);
      var tri1hex = rgbToHex(tri1[0], tri1[1], tri1[2]);
      var tri2hex = rgbToHex(tri2[0], tri2[1], tri2[2]);
      triadic1.textContent = tri1hex;
      triadic1.style.backgroundColor = tri1hex;
      triadic2.textContent = tri2hex;
      triadic2.style.backgroundColor = tri2hex;
    }

    function pad(n){
      return (n.length<2) ? "0"+n : n;
    }

    // RGB to HSL conversion
    function rgbToHsl(r, g, b) {
      r /= 255; g /= 255; b /= 255;
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;
      if(max === min){
          h = s = 0; // achromatic
      }else{
          var d = max - min;
          s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
          switch(max){
              case r: h = (g - b) / d + (g < b ? 6 : 0); break;
              case g: h = (b - r) / d + 2; break;
              case b: h = (r - g) / d + 4; break;
          }
          h *= 60;
      }
      return [Math.round(h), s, l];
    }

    // HSL to RGB conversion
    function hslToRgb(h, s, l) {
      h /= 360;
      var r, g, b;
      if(s === 0){
          r = g = b = l; // achromatic
      }else{
          var hue2rgb = function(p, q, t){
              if(t < 0) t += 1;
              if(t > 1) t -= 1;
              if(t < 1/6) return p + (q - p) * 6 * t;
              if(t < 1/2) return q;
              if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
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
      return "#" + pad(r.toString(16)) + pad(g.toString(16)) + pad(b.toString(16));
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
