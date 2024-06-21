document.addEventListener('DOMContentLoaded', () => {
    const chamadoId = localStorage.getItem('chamadoSelecionado');
    if (!chamadoId) {
        alert("Nenhum chamado selecionado.");
        window.location.href = 'index.html';
        return;
    }

    const chamados = JSON.parse(localStorage.getItem('chamados')) || [];
    const chamado = chamados.find(chamado => chamado.id === chamadoId);

    if (!chamado) {
        alert("Chamado não encontrado.");
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('detalhesTitulo').innerText = chamado.titulo;
    document.getElementById('detalhesLocalidade').innerText = chamado.localidade;
    document.getElementById('detalhesDescricao').innerText = chamado.descricao;
    document.getElementById('detalhesPrioridade').innerText = calculaPrioridade(chamado.localidade);
});

function calculaPrioridade(localidade) {
    const chamados = JSON.parse(localStorage.getItem('chamados')) || [];
    const chamadosNoMesmoLocal = chamados.filter(chamado => chamado.localidade === localidade).length;

    if (chamadosNoMesmoLocal >= 5) {
        return "Alta";
    } else if (chamadosNoMesmoLocal >= 3) {
        return "Média";
    } else {
        return "Baixa";
    }
}