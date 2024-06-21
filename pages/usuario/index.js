document.addEventListener('DOMContentLoaded', function() {
    // Recuperar dados do usuário do localStorage
    var storedUser = JSON.parse(localStorage.getItem('User'));
    
    if (storedUser) {
        document.getElementById('nome').value = storedUser.username
        document.getElementById('email').value = storedUser.email;
        document.getElementById('senha').value = storedUser.password;
    } else {
        alert('Nenhum usuário encontrado.');
    }
});