let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-images img');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function changeSlide(n) {
    showSlide(currentSlide + n);
}

// Inicializa el primer slide
showSlide(currentSlide);

// Manejo de comentarios
document.getElementById('submit-comment').addEventListener('click', function() {
    const comentario = document.getElementById('comentario').value;
    if (comentario) {
        const comentariosList = document.getElementById('comentarios-list');
        const newComment = document.createElement('p');
        newComment.textContent = comentario;
        comentariosList.appendChild(newComment);
        document.getElementById('comentario').value = ''; // Limpiar el textarea
    } else {
        alert('Por favor, escribe un comentario.');
    }
});

// Cambiar entre modo oscuro y claro
document.getElementById('theme-toggle').addEventListener('click', function() {
    const body = document.body;
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        this.textContent = 'Modo Oscuro';
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        this.textContent = 'Modo Claro';
    }
});
