// Função para avançar para a próxima página
function nextPage() {
    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
}

// Função para quando o botão "Sim" for clicado
function sayYes() {
    document.getElementById('page2').classList.add('hidden');
    document.getElementById('page3').classList.remove('hidden');
}

// Função para quando o botão "Não" for clicado
function sayNo() {
    // Ocultar a página atual (onde estão os botões "Sim" e "Não")
    document.getElementById('page2').classList.add('hidden');
    // Exibir a página com a imagem "não.jpg"
    document.getElementById('page4').classList.remove('hidden');
}

// Função para voltar à página 2
function goBackToPage2() {
    // Ocultar a página com a imagem "não.jpg"
    document.getElementById('page4').classList.add('hidden');
    // Exibir novamente a página 2
    document.getElementById('page2').classList.remove('hidden');
}

// Função para garantir que o botão "Não" só se mova dentro do limite de 360x592 pixels
const noButton = document.getElementById('noButton');

// Definindo os limites da área onde o botão pode se mover
const LIMIT_WIDTH = 300;  // Limite da largura da área
const LIMIT_HEIGHT = 500; // Limite da altura da área

// Função para garantir que o botão "Não" não ultrapasse os limites da tela
function moveButtonWithinBounds() {
  // Pega a largura e altura do botão "Não"
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;

  // Calcula a posição aleatória para o botão "Não"
  let randomX = Math.random() * (LIMIT_WIDTH - buttonWidth);
  let randomY = Math.random() * (LIMIT_HEIGHT - buttonHeight);

  // Atualiza a posição do botão "Não" dentro dos limites definidos
  noButton.style.position = 'absolute';
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

// Quando o mouse passa sobre o botão "Não", ele se move
noButton.addEventListener('mouseover', moveButtonWithinBounds);

// Quando o botão "Não" for clicado, ele vai para a nova página
noButton.addEventListener('click', sayNo);

// Garantir que o botão continue se movendo dentro da tela mesmo ao redimensionar a janela
window.addEventListener('resize', moveButtonWithinBounds);
