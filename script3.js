let result = document.getElementById('resultBox');
let s = '';

function appendToScreen(value) {
  if (value === 'x') {
    s = '*';
    result.value += 'x';
  } else {
    if(result.value === '0'){
        result.value = '';
    }
    s = value;
    result.value += value;
  }
}

function delOne() {
  result.value = result.value.slice(0, -1);
}

function resetAll() {
  result.value = '0';
  s = ''; 
}

function equal() {
  const evalString = result.value.replace(/x/g, '*');
  result.value = eval(evalString);
}
