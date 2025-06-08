// ========== Tema Escuro ==========
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.onclick = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("tema", document.body.classList.contains("dark") ? "dark" : "light");
    notificar("Tema " + (document.body.classList.contains("dark") ? "escuro ativado" : "claro ativado"));
};

window.onload = () => {
    const tema = localStorage.getItem("tema");
    if (tema === "dark") document.body.classList.add("dark");
};

// ========== Animação de entrada ==========
document.querySelectorAll('.painel-card').forEach(card => {
    card.classList.add('animar-entrada');
});

// ========== Filtro de pesquisa ==========
document.getElementById("busca").addEventListener("input", (e) => {
    const termo = e.target.value.toLowerCase();
    document.querySelectorAll(".painel-card").forEach(card => {
        const texto = card.innerText.toLowerCase();
        card.style.display = texto.includes(termo) ? "block" : "none";
    });
});

// ========== Toast ==========
function notificar(mensagem) {
    const aviso = document.createElement('div');
    aviso.className = 'toast';
    aviso.innerText = mensagem;
    document.body.appendChild(aviso);
    setTimeout(() => aviso.remove(), 3000);
}

// ========== Tutorial ==========
function toggleTutorial() {
    const box = document.getElementById("tutorialBox");
    box.classList.toggle("ativo");
}

// ========== Navegação com delay ==========
document.querySelectorAll(".painel-card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.add("clicado");
        notificar("Caminhando...");
        setTimeout(() => {
            const destino = card.getAttribute("data-url");
            window.location.href = destino;
        }, 1000);
    });
});
