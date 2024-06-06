
const saibaMaisBtn = document.getElementById('saibaMais');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');

saibaMaisBtn.addEventListener('click', function() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
});

overlay.addEventListener('click', function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
});