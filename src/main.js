/* Manejo del DOM */

const pokedata = POKEMON.pokemon;
const loginBg = document.getElementById('login-bg');
const secondScreen = document.getElementById('second-screen');
const password = document.getElementById('password');
const user = document.getElementById('user');
const enterButton = document.getElementById('enter-button');
const errorMessage = document.getElementById('error-message');
const allPokemones = document.getElementById('all-pokemones');
const pokeDetails = document.getElementById('poke-details');

// Definir variable para realizar función 
const userTrue = 'LABORATORIA';
const passwordTrue = 'LABORATORIA';
let tryNumb = 0;

// Función para validar contraseña correcta
const validation = () => {
  const password = document.getElementById('password');
  if (password.value === passwordTrue) {
    loginBg.classList.add('hide');
    secondScreen.classList.replace('hide', 'show');
    event.preventDefault();
  } else {
    loginBg.classList.add('hide');
    errorMessage.classList.add('hide');
  }
};
enterButton.addEventListener('click', validation);

const mostrarData = (pokemon) => {
  let mostrar = ' ';
  for (let i = 0; i < pokemon.length; i++) {
    let llamar = `
    <div class="show-pokemon">
      <figure class="figure">
        <img src="${pokemon[i].img}"/>
      </figure>
      <div class="poke-name">
        <p>${pokemon[i].name}</p>
      </div>
    </div>`;
    
    mostrar += llamar;
  }
  return mostrar;
};

allPokemones.innerHTML = mostrarData(pokedata);

const detailData = (pokemon) => {
  let show = ' ';
  for (let i = 0; i < pokemon.length; i++) {
    let callPoke = `
  <div class="all-poke-details">
    <div class="img-poke-details">
      <figure class="img-poke-details">
        <img src="${pokemon[i].img}"/>
      </figure>
      <div class="name-poke-details">
        <p>${pokemon[i].name}</p>
      </div>
      <div class="candy-poke-details">
        <p>Candy: ${pokemon[i].candy_count}</p>
      </div>
      <div class="egg-poke-details">
        <p>Huevo: ${pokemon[i].egg}</p>
      </div>
      <div class="egg-poke-details">
      <p>Spawn: ${pokemon[i].spawn_time}</p>
    </div>
    <div class="type-poke-details">
      <p>AVG: ${pokemon[i].type}</p>
    </div>
   </div>    

    </div>`;
    
    show += callPoke;
  }
  return show;
};
pokeDetails.innerHTML = detailData(pokedata);