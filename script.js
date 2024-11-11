// Função de validação e confirmação do formulário
document.getElementById("formContato").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Validação dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    if (nome && email && mensagem) {
        const mensagemConfirmacao = document.getElementById("mensagemConfirmacao");
        mensagemConfirmacao.style.display = "block";
        mensagemConfirmacao.style.opacity = 0;
        setTimeout(() => {
            mensagemConfirmacao.style.opacity = 1;
        }, 100);
        document.getElementById("formContato").reset();
    } else {
        alert("Por favor, preencha todos os campos.");
    }
});

// Adiciona a classe "hidden-before-scroll" aos elementos apenas após o carregamento completo da página
window.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll("#projetos article, #sobre img, #sobre p");
    elements.forEach(el => {
        el.classList.add("hidden-before-scroll");
    });
});

// Animação ao rolar a página (fade-in)
window.addEventListener("scroll", function() {
    const elements = document.querySelectorAll("#projetos article, #sobre img, #sobre p");
    elements.forEach((el) => {
        const position = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (position < screenPosition) {
            el.classList.add("fade-in");
            el.classList.remove("hidden-before-scroll");
        }
    });
});

