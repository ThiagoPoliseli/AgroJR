// Botão do Assistente Virtual
document.getElementById('assistant-btn').addEventListener('click', function () {
    const assistantBox = document.getElementById('assistant-box');
    if (assistantBox.classList.contains('hidden')) {
        assistantBox.classList.remove('hidden');
    } else {
        assistantBox.classList.add('hidden');
    }
});

// Simulação de Assistente Virtual
document.getElementById('assistant-send').addEventListener('click', function () {
    const userInput = document.getElementById('assistant-input').value;
    alert('Assistente Virtual: ' + userInput);
});

// Função que será chamada no scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const sections = document.querySelectorAll(".parallax-section");

    let scrollPos = window.scrollY;

    // Adiciona animações ao header
    if (scrollPos > 50) {
        header.style.backgroundColor = "#222";
    } else {
        header.style.backgroundColor = "#333";
    }

    // Adiciona efeitos ao rolar em cada seção
    sections.forEach((section, index) => {
        let sectionPos = section.getBoundingClientRect().top;
        if (sectionPos < window.innerHeight) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        } else {
            section.style.opacity = 0;
            section.style.transform = "translateY(50px)";
        }
    });
});