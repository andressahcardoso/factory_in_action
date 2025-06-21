function atualizarDataHora() {
  const now = new Date();

  const dia = now.getDate().toString().padStart(2, '0');
  const mes = (now.getMonth() + 1).toString().padStart(2, '0');
  const ano = now.getFullYear();

  const horas = now.getHours().toString().padStart(2, '0');
  const minutos = now.getMinutes().toString().padStart(2, '0');
  const segundos = now.getSeconds().toString().padStart(2, '0');

  const dataHora = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;

  document.getElementById('currentTime').textContent = dataHora;
}

atualizarDataHora();
setInterval(atualizarDataHora, 1000);

const btn = document.getElementById('btnFullscreen');

btn.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch((err) => {
        alert(`Erro ao entrar em tela cheia: ${err.message}`);
    });
    } else {
        document.exitFullscreen();
    }
});

function produced(isMore) {
    let value = Number(document.getElementById('produced').textContent);

    (isMore) ? value++ : value--;
    if (value < 0)
        value = 0;

    document.getElementById('produced').textContent = value; 
}

function rejected(isMore) {
    let value = Number(document.getElementById('rejected').textContent);

    (isMore) ? value++ : value--;
     if (value < 0)
        value = 0;
    
    document.getElementById('rejected').textContent = value; 
}