document.addEventListener('DOMContentLoaded', () => {
    const miniaturas = document.querySelectorAll('.miniaturas img');
    const imagemDestaque = document.getElementById('imagem-destaque');

    miniaturas.forEach(miniatura => {
        miniatura.addEventListener('click', () => {
            const srcImagemGrande = miniatura.src.replace('_pequena', '_grande');
            imagemDestaque.src = srcImagemGrande;
        });
    });
});
