const button = document.querySelector("button");
const mar = document.querySelector("#mar");
mar.play();
const span = document.querySelector("#span");

let cont = 0;

button.addEventListener("click", () => {
  mar.pause();

  const audio = document.querySelector("#manuel");
  audio.play();

  let body = document.querySelector("body");
  let fogo = document.querySelector("#fogo");
  let letra = document.querySelector("#veneno");
  let texto = document.querySelector("#mensagem");

  body.className = "manuelGomes";
  fogo.className = "apagado";
  letra.className = "vivo";
  texto.className = "veneno";

  setTimeout(() => {
    body.className = "body";
    fogo.className = "fogo";
    letra.className = "veneno";
    texto.className = "mensagem";
    mar.play();
  }, 16000);

  addCont();
});
