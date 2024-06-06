 import { screenChange } from '../../utils/js/screenChange.js';

document.getElementById("login-button").addEventListener("click", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value; // Obtém o valor do campo de email
  const password = document.getElementById("password").value; // Obtém o valor do campo de senha

  registrationform(username, email, password); // Chama a função cadastrarUsuario com os valores do email e senha
});

// Função para cadastrar um novo usuário
function registrationform(username, email, password) {
  // Verifica se já existe um usuário armazenado
  const storedUser = JSON.parse(localStorage.getItem('User'));

  if (storedUser && storedUser.username === username) {
    alert('Usuario já cadastrado');
    return  screenChange('../login')
  }

  // Cria um objeto para armazenar os dados do usuário
  const user = {
    username: username.toLowerCase(),
    email: email.toLowerCase(),
    password: password
  };

  // Armazena os dados do usuário no localStorage
  localStorage.setItem('User', JSON.stringify(user));
  
  alert("Usuário cadastrado com sucesso!");

  screenChange('../login')
}