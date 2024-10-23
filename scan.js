let colors = [];

for (const sheet of document.styleSheets) {
  try {
    for (const rule of sheet['cssRules']) {
      if (
        rule['style']['color'] != '' &&
        rule['style']['color'] != undefined
      ) {
        colors.push(rule['style']['color'])
      }
    }
  } catch {

  }
}

function uniq_fast(a) {
  var seen = {};
  var out = [];
  var len = a.length;
  var j = 0;
  for (var i = 0; i < len; i++) {
    var item = a[i];
    if (seen[item] !== 1) {
      seen[item] = 1;
      out[j++] = item;
    }
  }
  return out;
}

for (let i = 0; i < colors.length; ++i) {
  let elemDiv = document.createElement('div');
  elemDiv.style.cssText = 'background-color:' + colors[i] + ';width: 100%;height: 20px;text-align:center'
  elemDiv.innerText = colors[i];
  document.body.appendChild(elemDiv);
}
