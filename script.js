const numero1 = document.querySelector("#numero-1");
const numero2 = document.querySelector("#numero-2");

document.querySelector("form").addEventListener("submit", calcular);

function calcular(e) {
  e.preventDefault();
  document.getElementById("titulo").innerText =
    Number(numero1.value) + Number(numero2.value);
}
