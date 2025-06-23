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

    function setColor(){
      var rVal = parseInt(r.value, 10),
          gVal = parseInt(g.value, 10),
          bVal = parseInt(b.value, 10);
      var r_hex = rVal.toString(16),
          g_hex = gVal.toString(16),
          b_hex = bVal.toString(16),
          hex = "#" + pad(r_hex) + pad(g_hex) + pad(b_hex);
      // body.style.backgroundColor = hex; // Keep background black
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
          compHex = "#" + pad(compR.toString(16)) + pad(compG.toString(16)) + pad(compB.toString(16));
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
    }

    function pad(n){
      return (n.length<2) ? "0"+n : n;
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