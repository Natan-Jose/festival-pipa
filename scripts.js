//  <!-- Pipa -->
const emojis = [ '🪁'];

    for (const emoji of emojis) {
        const pipa = document.createElement('div');
        pipa.className = 'pipa';
        pipa.innerHTML = emoji;
        document.body.appendChild(pipa);
    }

function exibirMensagem() {
document.getElementById('opcoes').style.display = 'none';
document.getElementById('mensagem').style.display = 'block';
}

// Código JavaScript para mover a opção "Não" quando o mouse passa sobre ela
document.getElementById('opcao-nao').addEventListener('mouseover', function() {
this.style.position = 'absolute';
this.style.left = Math.random() * window.innerWidth + 'px';
this.style.top = Math.random() * window.innerHeight + 'px';
});