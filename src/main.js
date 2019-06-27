/* Manejo del DOM */
const user = document.getElementById('user');
const password = document.getElementById('password');
const login = document.getElementById('login');
const logOut = document.getElementById('error');
const informationPage = document.getElementById('information');
// Función para validar contraseña correcta
const userTrue = 'LABORATORIA'; 
const passwordTrue = 'LABORATORIA';
let tryingNumb = 0;
const validation = () => { 
  if (password.value === passwordTrue && user.value === userTrue) {
    login.classList.add('hide');
    informationPage.classList.replace('hide', 'show');
    event.preventDefault();
  } else {
    if (tryingNumb < 2) {
      wrong.classList.replace('hide', 'show');
      password.value = '';
      tryingNumb++;
      event.preventDefault();
    } else {
      login.classList.add('hide');
      wrong.classList.add('hide');
      error.classList.replace('hide', 'show');
      event.preventDefault();
    } 
  }
};  
const loginButton = document.getElementById('enter-button');
loginButton.addEventListener('click', validation);