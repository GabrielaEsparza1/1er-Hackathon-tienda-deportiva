// Bloque para efecto estrella
(function() {
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        // Efecto cuando el mouse entra en una estrella
        star.addEventListener('mouseover', function() {
            const val = this.dataset.value;
            // Seleccionamos las estrellas solo de este modal
            const allStars = this.parentElement.querySelectorAll('.star');
            allStars.forEach(s => {
                if (parseInt(s.dataset.value) <= parseInt(val)) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });

        // Efecto cuando el mouse sale de la estrella
        star.addEventListener('mouseout', function() {
            const allStars = this.parentElement.querySelectorAll('.star');
            allStars.forEach(s => s.classList.remove('active'));
        });
    });
})();
