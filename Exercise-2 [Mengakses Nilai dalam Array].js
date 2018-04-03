var a;
function balikString(input) {
  var s = '';

  for (var i = input.length - 1; i >= 0; i--) {
    s += input[i];
  }

  return s;
}

console.log(balikString('Hello World!'));
