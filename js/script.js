// Abrir contato pela página produtos (abre contato.html)
function abrirContato() {
  window.location.href = 'contato.html';
}

// Galeria: abrir imagem em modal
function abrirImagem(img) {
  const modal = document.getElementById('modal');
  const modalImg = document.getElementById('img-modal');
  const captionText = document.getElementById('caption');

  modal.style.display = 'block';
  modalImg.src = img.src;
  captionText.innerText = img.alt;
}

function fecharModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
}

// Formulário de contato (simplesmente mostra alerta)
function enviarMensagem(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const mensagem = document.getElementById('mensagem').value;
  const newsletter = document.getElementById('newsletter').checked;

  alert(
    `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.\n\n` +
    `E-mail: ${email}\n` +
    `Telefone: ${telefone}\n` +
    `Mensagem: ${mensagem}\n` +
    `Newsletter: ${newsletter ? 'Sim' : 'Não'}`
  );

  document.getElementById('form-contato').reset();
}
