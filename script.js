document.addEventListener('DOMContentLoaded', function() {
    const contrastToggle = document.getElementById('contrastToggle');
    const colorBlindToggle = document.getElementById('colorBlindToggle');
    const body = document.body;

    contrastToggle.addEventListener('click', function() {
        body.classList.toggle('high-contrast');
    });

    colorBlindToggle.addEventListener('click', function() {
        body.classList.toggle('color-blind');
    });
});