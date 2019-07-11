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
const catchedPokedex = document.getElementById('catchedPokedex');

/* Filter */
const filterMenu = document.getElementById('filterMenu');
/* const catchedSelect = document.getElementById('catchedSelect'); Ha sido cambiado por un div con buttons*/
const alfaSelect = document.getElementById('alfaSelect');
const spawnSelect = document.getElementById('spawnSelect');
const typeSelect = document.getElementById('typeSelect'); // padre de botones
const weakSelect = document.getElementById('weakSelect');
const typeButton = document.getElementsByClassName('typeButton');

/* Funcionalidad del Login */
const userTrue = 'LABORATORIA';
const passwordTrue = 'LABORATORIA';
let tryNumb = 0;

/* Mostrar tarjeta de información de pokemones */
const modalContent = document.getElementById('modal-content');
const cardPokemon = document.getElementById('card-pokemon');
const close = document.getElementById('close');

const validation = () => {
  const password = document.getElementById('password');
  if (password.value === passwordTrue) {
    loginSection.classList.add('hide');
    pokedexSection.classList.replace('hide', 'show');
    headerTop.classList.replace('hide', 'show'); // Agregue el header 
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

/* Pokemon: name + img */
const showPokemons = (pokemon) => {
  let show = [];
  for (let i = 0; i < pokemon.length; i++) {
    let llamar = `
    <div id="${i}" class="show-pokemon">
      <figure></figure>
      <img src="${pokemon[i].img}"/>
      <p>${pokemon[i].name}</p>
    </div>`;

    show += llamar;
  }

  return show;
};
allPokedex.innerHTML = showPokemons(arrayPokemon(dataGlobal));

// Busca a un Pokemon
inputSearch.addEventListener('input', event => {
  const pokemonWanted = searchPokemons(dataGlobal, event.target.value.toLowerCase());
  allPokedex.innerHTML = showPokemons(pokemonWanted);
});

// Ordenar pokemones AZ / ZA
alfaSelect.addEventListener('change', () => {
  const orderPokemons = sortAlfa(dataGlobal, alfaSelect.value);
  allPokedex.innerHTML = showPokemons(orderPokemons);
});

// Filtra por aparición
spawnSelect.addEventListener('change', () => {
  const spawnPokemons = orderSpawn(dataGlobal, spawnSelect.value);
  allPokedex.innerHTML = showPokemons(spawnPokemons);
});

// Filtra por tipo
typeSelect.addEventListener('click', (event) => {
  const typePokemon = filterTypes(dataGlobal, event.target.value);
  allPokedex.innerHTML = showPokemons(typePokemon);
});


catchedPokedex.addEventListener('click', (event) => {
  switch (event.target.value) {
  case '1':
    allPokedex.innerHTML = showPokemons(catchedPokemon());
    console.log(catchedPokemon());
    break;
  case '0':
    allPokedex.innerHTML = showPokemons(unCatchedPokemon());
    console.log();
    break;
  };
});


// Filtra por debilidad
weakSelect.addEventListener('change', () => {
  const weakPokemons = filterWeakness(dataGlobal, weakSelect.value);
  allPokedex.innerHTML = showPokemons(weakPokemons);
});

allPokedex.addEventListener('click', (event) => {
  const informationCards = parseInt(event.target.getAttribute('id'));
  document.getElementById('myModal').classList.remove('hide');
  /* Insertar informacion de pokemon en Modal */
  document.getElementById('card-pokemon').innerHTML = `
    <img class="imagenModal" src="${dataGlobal[informationCards].img}"/>
    <p>${dataGlobal[informationCards].name}</p>
    <p>${dataGlobal[informationCards].weight}</p> 
    <p>${dataGlobal[informationCards].height}</p>    
    <p>${dataGlobal[informationCards].type}</p> `;
});

/* Evento cerrar Modal */
close.addEventListener('click', () => {
  document.getElementById('myModal').classList.add('hide');
}); 