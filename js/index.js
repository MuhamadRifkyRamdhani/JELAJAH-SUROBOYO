// /js/dark-mode.js

const toggleDarkMode = document.getElementById('toggle-dark-mode');
const body = document.body;

// Tambahkan event listener untuk tombol
toggleDarkMode.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Ubah teks dan ikon tombol berdasarkan mode
    if (body.classList.contains('dark-mode')) {
        toggleDarkMode.textContent = '☀️';
    } else {
        toggleDarkMode.textContent = '🌙';
    }
});
