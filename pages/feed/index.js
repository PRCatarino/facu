document.getElementById("cadastro-button").addEventListener("click", (e) => {
    e.preventDefault();

    const titulo = document.getElementById("titulo").value.trim();
    const descricao = document.getElementById("descricao").value.trim();
    const localidade = document.getElementById("local").value.trim();

    if (!titulo || !descricao || !localidade) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const chamado = { 
        id: generateUniqueId(),
        titulo,
        descricao,
        localidade 
    };

    try {
        let chamados = JSON.parse(localStorage.getItem("chamados")) || [];
        chamados.push(chamado);
        localStorage.setItem("chamados", JSON.stringify(chamados));

        alert("Chamado salvo com sucesso!");
        exibeFeed();
    } catch (error) {
        console.error("Erro ao salvar o chamado:", error);
        alert("Erro ao salvar o chamado. Tente novamente.");
    }
});

function exibeFeed() {
    const feedContainer = document.getElementById('feedContainer');
    feedContainer.innerHTML = ''; // Limpar o conteúdo atual

    const chamados = JSON.parse(localStorage.getItem('chamados')) || [];

    if (chamados.length === 0) {
        feedContainer.innerHTML = "<p>Nenhum chamado encontrado.</p>";
        return;
    }

    chamados.forEach(chamado => {
        const chamadoHTML = `
            <div class="container-box">
                <div class="inputs-container">
                    <div class="titleArea">
                        <h4>${chamado.titulo}</h4>
                    </div>
                    <div class="descriptionArea">
                        <h4>${chamado.descricao}</h4>
                    </div>
                </div>
                <div class="localidade-container">
                    <div class="localidadeArea">
                        <h4>${chamado.localidade}</h4>
                    </div>
                    <button class="ver-mais-button" id="cadastro-button" data-id="${chamado.id}">Ver mais</button>
                </div>
            </div>
        `;
        feedContainer.innerHTML += chamadoHTML;
    });

    document.querySelectorAll('.ver-mais-button').forEach(button => {
        button.addEventListener('click', (e) => {
            const chamadoId = e.target.getAttribute('data-id');
            localStorage.setItem('chamadoSelecionado', chamadoId);
            window.location.href = '../feedDetails/index.html'
        });
    });
}

function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

exibeFeed();