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

/* Funcionalidad del Login */
const userTrue = 'LABORATORIA';
const passwordTrue = 'LABORATORIA';
let tryNumb = 0;

/* Mostrar tarjeta de información de pokemones */
const myModal = document.getElementById('myModal')
const modalContent = document.getElementById('modal-content');
const cardPokemon = document.getElementById('card-pokemon');
const close = document.getElementById('close');

/* Funciòn de loggeo */
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


/* Pokemon: name + mg */
/* 
 showPokemons : retorna string que representa un template literal
 p1 : array de objetos de pokemons
*/
const showPokemons = (p1) => {
  let templatePokedex = '';
  for (let i = 0; i < p1.length; i++) {
    templatePokedex += `
    <div id="${p1[i].id}" class="show-pokemon">
      <figure></figure>
      <img src="${p1[i].img}"/>
      <p>${p1[i].name}</p>
    </div>`;
  }
  return templatePokedex;
};
//console.log(typeof showPokemons(dataGlobal));
allPokedex.innerHTML = showPokemons(arrayPokemon(dataGlobal));

/* Buscar a un pokémon */
inputSearch.addEventListener('input', event => {
  const pokemonWanted = searchPokemons(dataGlobal, event.target.value.toLowerCase());
  allPokedex.innerHTML = showPokemons(pokemonWanted);
});

/* Ordena AZ / ZA*/
alfaSelect.addEventListener('change', () => {
  const orderPokemons = sortAlfa(dataGlobal, alfaSelect.value);
  allPokedex.innerHTML = showPokemons(orderPokemons);
});

/* Filtra por aparición */
spawnSelect.addEventListener('change', () => {
  const spawnPokemons = orderSpawn(dataGlobal, spawnSelect.value);
  allPokedex.innerHTML = showPokemons(spawnPokemons);
});

/* Filtra por tipo */
typeSelect.addEventListener('click', (event) => {
  const typePokemon = filterTypes(dataGlobal, event.target.value);
  allPokedex.innerHTML = showPokemons(typePokemon);
});

/* Pokemones atrapados */
catchedPokedex.addEventListener('click', (event) => {
  switch (event.target.value) {
  case '1':
    allPokedex.innerHTML = showPokemons(catchedPokemon());
    break;
  case '0':
    allPokedex.innerHTML = showPokemons(unCatchedPokemon());
    break;
  };
});

/* Filtra por debilidad */
weakSelect.addEventListener('change', () => {
  const weakPokemons = filterWeakness(dataGlobal, weakSelect.value);
  allPokedex.innerHTML = showPokemons(weakPokemons);
});

/* Modal */
  allPokedex.addEventListener('click', (event) => {
  const informationCards = event.target.parentElement.getAttribute('id')-1;
  myModal.classList.remove('hide');
  /* Insertar informacion de pokemon en Modal */
  document.getElementById('card-pokemon').innerHTML = `
    <p>${dataGlobal[informationCards].name}</p>
    <p>${dataGlobal[informationCards].weight}</p> 
    <p>${dataGlobal[informationCards].height}</p>    
    <p>${dataGlobal[informationCards].type}</p>
    <p>${dataGlobal[informationCards].avg_spawns}</p>
    <p>${dataGlobal[informationCards].weaknesses}</p>`
});

/* Cerrar Modal */
close.addEventListener('click', () => {
  myModal.classList.add('hide');
}); 


/*
const eggSelect = document.getElementById('eggSelect');
const pokemonEggs = document.getElementById('pokemonEggs');

eggSelect.addEventListener('click',(event)=>{
  const eggPokemon = filterEggs(dataGlobal, event.target.value);
  pokemonEggs.innerHTML = showPokemons()
});
*/


typeSelect.addEventListener('click', (event) => {
  const typePokemon = filterTypes(dataGlobal, event.target.value);
  allPokedex.innerHTML = showPokemons(typePokemon);
});

/* Funcion del panel de filtrado */
const logoLink = document.getElementById('link-side-menu');
const showMenu = () => {
  const menu = document.getElementById('filter-menu');

  if(menu.classList.contains('disable-menu')){
    menu.classList.remove("disable-menu");
    menu.classList.add('enabled-menu');
  } 
  else{
    menu.classList.remove('enabled-menu');
    menu.classList.add('disable-menu');
  }
}

logoLink.addEventListener('click', showMenu);



