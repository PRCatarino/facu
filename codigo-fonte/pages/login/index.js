import { screenChange } from "../../utils/js/screenChange.js";

document.getElementById('login-button').addEventListener('click', (e)=>{
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  loginUsuario(email, password);
})
function loginUsuario(email, password) {
  const storedUser = JSON.parse(localStorage.getItem('User'));

  if (storedUser.email.toLowerCase() === email && storedUser.password === password) {
      alert('Login bem-sucedido!')
      return screenChange('../feed')
  } else {
      alert('Nome de usuário ou senha incorretos.');
  }
}

