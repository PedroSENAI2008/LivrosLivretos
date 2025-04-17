const audio = document.getElementById('musica-fundo');
const startTime = 0; // define o ponto inicial (em segundos)

// Quando o usuário passar o mouse sobre o body, a música tocará a partir do segundo 20.
document.body.addEventListener('mouseover', () => {
  // Se o áudio estiver antes do segundo 20, ajusta para começar a partir daí.
  if (audio.currentTime < startTime) {
    audio.currentTime = startTime;
  }
  audio.play();
});

const gandalfAudio = document.getElementById('Gandalf');
const Msg = document.getElementById('NotPass');
function NotPass() {
gandalfAudio.currentTime = 0;
  gandalfAudio.play();
  Msg.style.visibility = "visible";
  setTimeout(() => {
    Msg.style.visibility = "hidden";
  }, 4000);
}

function Comprar(){
    window.location.href= "item.html"
}
