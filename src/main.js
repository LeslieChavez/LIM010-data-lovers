const dataGlobal = POKEMON.pokemon;
/* Login */
const loginSection = document.getElementById('loginSection');
const pokedexSection = document.getElementById('pokedexSection');
const headerTop = document.getElementById('headerTop'); // Agregue el header 
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
const typeSelect = document.getElementById('typeSelect'); //padre de botones
const weakSelect = document.getElementById('weakSelect');
const typeButton = document.getElementsByClassName('typeButton');

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
    </div>`;
    
    show += llamar;
  }
  return show;
};
allPokedex.innerHTML = showPokemons(arrayPokemon(dataGlobal));


// Busca
inputSearch.addEventListener('input', event => {
  const pokemonWanted = searchPokemons(dataGlobal, inputSearch.value);
  allPokedex.innerHTML = showPokemons(pokemonWanted);
});
console.log(pokemonWanted);

// Ordenar pokemones
alfaSelect.addEventListener('change', () => {
  const orderPokemons = sortAlfa(dataGlobal, alfaSelect.value);
  allPokedex.innerHTML = showPokemons(orderPokemons);
});

// Filtra pokemones por aparición
spawnSelect.addEventListener('change', () => {
  const spawnPokemons = orderSpawn(dataGlobal, spawnSelect.value); 
  allPokedex.innerHTML = showPokemons(spawnPokemons);
});

// Filtra pokemones por tipo
typeSelect.addEventListener('click', (event)=>{
  const typePokemon = filterTypes(dataGlobal, event.target.value);
  allPokedex.innerHTML = showPokemons(typePokemon);
});

// Filtra pokemones por debilidades
weakSelect.addEventListener('change', () => {
  const weakPokemons = filterWeakness(dataGlobal, weakSelect.value);
  allPokedex.innerHTML = showPokemons(weakPokemons);
});
