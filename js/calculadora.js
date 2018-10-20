var n2 = prompt("Digite um número");
n2 = parseFloat(n2);
var n3 = 0;
n3 = parseFloat(n3);

if (isNaN(n2)) {
  // throw new Error('Digite um número')
  // return 0;
  alert("Error: Você não digitou um número");

  escreve(n3);
} else {
  escreve(n2);
}

function iniciarCalculo(simbolo) {
  // textContent nao aceita tags html
  // innerHTML ja aceita
  var n1 = document.querySelector("#output").textContent;
  n1 = parseFloat(n1);

  var n2 = prompt("Digite outro número");
  n2 = parseFloat(n2);

  try {
    var msg = calcular(simbolo, n1, n2);
  } catch (e) {
    alert(e);
    return;
  }

  escreve(msg);
}

function escreve(mensagem) {
  var output = document.querySelector("#output");
  output.innerHTML = '<strong>' + mensagem + '</strong>';
}

function calcular(simbolo, n1, n2) {
  if (
    simbolo !== "+" &&
    simbolo !== "-" &&
    simbolo !== "*" &&
    simbolo !== "/"
  ) {
    // alert('Digite um simbolo')
    throw new Error("Digite um número"); // erro em tempo real
  }

  if (isNaN(n1) || isNaN(n2)) {
    throw new Error("Digite um número");
  }

  var numeroCalculado = null;

  switch (simbolo) {
    case "+":
      numeroCalculado = n1 + n2;
      break;
    case "-":
      numeroCalculado = n1 - n2;
      break;
    case "*":
      numeroCalculado = n1 * n2;
      break;
    case "/":
      numeroCalculado = n1 / n2;
  }
  return '<strong>' + numeroCalculado + '</strong>';
}
