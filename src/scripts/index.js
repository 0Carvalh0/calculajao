const res = document.getElementById("calc__visor-atual");

function addValor(num) {
  let texto = document.querySelector("p#calc__visor-atual").innerHTML;

  if (texto === "") {
    let regex = /[\+\-\*\/\.]$/;

    if (!regex.test(num)) {
      res.innerHTML = num;
    }
  } else {
    let regex = /[\+\-\*\/\.]$/;

    if (regex.test(num)) {
      if (!regex.test(texto.slice(-1))) {
        res.innerHTML += num;
      }
    } else {
      let operacoes = /[\+\-\*\/]/;
      let partes = texto.split(operacoes);
      let ultima = partes[partes.length - 1];

      if (ultima.includes(".")) {
        res.innerHTML += num;
      } else {
        res.innerHTML += num;
      }
    }
  }
}

function limpar() {
  res.innerHTML = "";
  document.getElementById("calc__visor-anterior").innerHTML = "";
}

function deletar() {
  let texto = document.querySelector("p#calc__visor-atual").innerHTML;
  res.innerHTML = texto.substring(0, texto.length - 1);
}

function calcular() {
  let texto = document.querySelector("p#calc__visor-atual").innerHTML;
  if (texto) {
    document.getElementById("calc__visor-anterior").innerHTML = texto;
    res.innerHTML = eval(texto);
  } else {
    window.alert("[ERRO] Por favor, insira um número para calcular.");
  }
}
