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


// Busca
/*inputSearch.addEventListener('click', () => {
  const pokemonBuscado = window.filterWeakness(dataGlobal, inputSearch.value);
  allPokedex.innerHTML = showPokemons(pokemonBuscado);
})*/

// Ordenar pokemones
alfaSelect.addEventListener('change', () => {
  const orderPokemons = window.sortAlfa(dataGlobal, alfaSelect.value);
  allPokedex.innerHTML = showPokemons(orderPokemons);
});

spawnSelect.addEventListener('change', () => {
  const spawnPokemons = window.orderSpawn(dataGlobal, spawnSelect.value); 
  allPokedex.innerHTML = showPokemons(spawnPokemons);
});

// Filtra pokemones por tipo
typeSelect.addEventListener('click', () => {
  const typePokemons = window.filterTypes(dataGlobal, typeSelect.value);
  allPokedex.innerHTML = showPokemons(typePokemons);
})

// Filtra pokemones por debilidades
weakSelect.addEventListener('change', () => {
  const weakPokemons = window.filterWeakness(dataGlobal, weakSelect.value);
  allPokedex.innerHTML = showPokemons(weakPokemons);
})
