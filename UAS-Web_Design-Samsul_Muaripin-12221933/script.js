// script.js
document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('dark-mode-toggle');
    const home = document.getElementById('home');
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
        document.body.classList.add('dark-mode');
        home.classList.add('dark-mode-background-night');
        home.classList.remove('dark-mode-background-sun');
        } else {
        document.body.classList.remove('dark-mode');
        home.classList.add('dark-mode-background-sun');
        home.classList.remove('dark-mode-background-night');
        }
    });
});