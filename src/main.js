/* Login */
const loginSection = document.getElementById('loginSection');
const pokedexSection = document.getElementById('pokedexSection');
const headerTop = document.getElementById('headerTop'); //Agregue el header 
const password = document.getElementById('password');
const user = document.getElementById('user');
const enterButton = document.getElementById('enter-button');

/* Pokedex */
const inputSearch = document.getElementById('inputSearch');
const submitSearch = document.getElementById('submitSearch');
const allPokedex = document.getElementById('allPokedex');

/* Filter */
const filterMenu = document.getElementById('filterMenu');
const catchedSelect = document.getElementById('catchedSelect');
const alfaSelect = document.getElementById('alfaSelect');
const spawnSelect = document.getElementById('spawnSelect');
const typeSelect = document.getElementById('typeSelect');
const weakSelect = document.getElementById('weakSelect');

// Definir variable para realizar función 
const userTrue = 'LABORATORIA';
const passwordTrue = 'LABORATORIA';
let tryNumb = 0;

// Función para validar contraseña correcta
const validation = () => {
  const password = document.getElementById('password');
  if (password.value === passwordTrue) {
    loginSection.classList.add('hide');
    pokedexSection.classList.replace('hide', 'show');
    headerTop.classList.replace('hide', 'show'); //Agregue el header 
    event.preventDefault();
  } else {
    loginSection.classList.add('hide');
    errorMessage.classList.add('hide');
  }
};
enterButton.addEventListener('click', (event) => {
  event.preventDefault();
  validation();
});

// Mostrar pokemones
const showPokemons = (pokemon) => {
  let show = [];
  for (let i = 0; i < pokemon.length; i++) {
    let llamar = `
    <div class="show-pokemon">
      <figure></figure>
      <img src="${pokemon[i].img}"/>
      <p>${pokemon[i].name}</p>
      <p>#${pokemon[i].num}<p/>
    </div>`;
    
    show += llamar;
  }
  return show;
};
allPokedex.innerHTML = showPokemons(arrayPokemon(dataGlobal));

// Ordenar pokemones
alfaSelect.addEventListener('change', () => {
  const ordenarpokemones = window.sortAlfa(dataGlobal, alfaSelect.value);
  allPokedex.innerHTML = showPokemons(ordenarpokemones);
});

spawnSelect.addEventListener('change', () => {
  const spawnPokemones = window.orderSpawn(dataGlobal, spawnSelect.value); 
  allPokedex.innerHTML = showPokemons(spawnPokemones);
});
