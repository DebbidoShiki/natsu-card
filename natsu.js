let natsuImg = document.querySelector(".imgcard");
let audio = new Audio("theme.mp3");
let transformado = false;
let travado = false; // trava os cliques durante a animação

natsuImg.addEventListener("click", () => {
  if (travado) return; // se estiver travado, ignora o clique

  travado = true; // trava novos cliques

  if (!transformado) {
    natsuImg.src = "natsu-muda.jpg";
    audio.currentTime = 0;
    audio.play();
  } else {
    natsuImg.src = "natsuIcon.jpg";
    audio.pause();
    audio.currentTime = 0;
  }

  transformado = !transformado;

  // depois de 1.5 segundos (1500ms), libera o clique de novo
  setTimeout(() => {
    travado = false;
  }, 600);
});
