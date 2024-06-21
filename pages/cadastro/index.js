 import { screenChange } from '../../utils/js/screenChange.js';

document.getElementById("login-button").addEventListener("click", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value; 
  const password = document.getElementById("password").value; 
  registrationform(username, email, password);
});

function registrationform(username, email, password) {
  const storedUser = JSON.parse(localStorage.getItem('User'));

  if (storedUser === email) {
    alert('Email já cadastrado');
    return  screenChange('../login')
  }

  const user = {
    username: username.toLowerCase(),
    email: email.toLowerCase(),
    password: password
  };

  localStorage.setItem('User', JSON.stringify(user));
  alert("Usuário cadastrado com sucesso!");
  screenChange('../login')
}