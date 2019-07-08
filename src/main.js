/* Manejo del DOM */
const dataPoker = POKEMON.pokemon;
const loginBg = document.getElementById('login-bg');
const secondScreen = document.getElementById('second-screen');
const password = document.getElementById('password');
const user = document.getElementById('user');
const enterButton = document.getElementById('enter-button');
const allPokemones = document.getElementById('all-pokemones');
const ordenaz = document.getElementById('alfa-options');

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
enterButton.addEventListener('click', (event) => {
  event.preventDefault();
  validation();
});

const showData = (pokemon) => {
  let show = ' ';
  for (let i = 0; i < pokemon.length; i++) {
    let llamar = `
    <div class="show-pokemon">
        <img src="${pokemon[i].img}"/>
        <p>${pokemon[i].name}</p>
    </div>`;
    
    show += llamar;
  }
  return show;
};

allPokemones.innerHTML = showData(newPokeData(dataPoker));

/* ordenaz.addEventListener('change', () => {
  console.log(ordenaAtoZ(dataPoker, ordenaz.value));

  if ('A-Z' === ordenaz.value) {
    const pokeOrder = ordenaAtoZ(dataPoker);

    allPokemones.innerHTML = showData(pokeOrder);
  } else {
    const pokeOrderReverse = ordenaAtoZ(dataPoker).reverse();

    allPokemones.innerHTML = showData(pokeOrderReverse);
  }
}); */

ordenaz.addEventListener('change', () => {
  const ordenarpokemones = window.ordenaAtoZ(dataPoker, ordenaz.value); // cambiar por la data
  allPokemones.innerHTML = showData(ordenarpokemones);
});

