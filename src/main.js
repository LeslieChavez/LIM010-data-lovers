/* Manejo del DOM */

const loginBg = document.getElementById('login-bg');
const secondScreen = document.getElementById('secondScreen');
const password = document.getElementById('password');
const user = document.getElementById('user');
const errorMessage = document.getElementById('errorMessage');
const enterButton = document.getElementById('enterButton');
// Función para validar contraseña correcta
enterButton.addEventListener ('click',() => {
  if (user.value === "" && password.value === "") {
    loginScreen.classList.replace(show, hide);
    secondScreen.classList.replace(hide, show);
  } else {
    errorMessage.innerHTML = "Datos incorrectos"
  }
});

