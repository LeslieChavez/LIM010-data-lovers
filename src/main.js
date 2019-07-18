const dataGlobal = POKEMON.pokemon;
/* Login */
const loginSection = document.getElementById('login-section');
const pokedexSection = document.getElementById('pokedex-section');
const headerTop = document.getElementById('header-top'); // Agregue el header 
const password = document.getElementById('password');
const user = document.getElementById('user');
const enterButton = document.getElementById('enter-button');

/* Header - Titles*/
const pokedexTitle = document.getElementById('pokedex-title');
const incubatorTitle = document.getElementById('incubator-title');

/* Pokedex */
const inputSearch = document.getElementById('input-search');
const submitSearch = document.getElementById('submitSearch');
const allPokedex = document.getElementById('all-pokedex');
const catchedPokedex = document.getElementById('catched-pokedex');

/* Filter */
const filterMenu = document.getElementById('filter-menu');

const alfaSelect = document.getElementById('alfa-select');
const spawnSelect = document.getElementById('spawn-select');
const typeSelect = document.getElementById('type-select'); // padre de botones
const weakSelect = document.getElementById('weak-select');

/* Modal */
const modalMask = document.getElementById('modal-mask');
const modalBox = document.getElementById('modal-box');
const infoPokemon = document.getElementById('info-pokemon');
const close = document.getElementById('close');

/* Incucubadora */
const incubatorSection = document.getElementById('incubator-section');
const eggSelect = document.getElementById('egg-select');
const eggPokedex = document.getElementById('egg-pokedex'); //contenedor de pokemones por huevo
const eggDescriptionPercent = document.getElementById('egg-description-percent');


/* Funcionalidad del Login */
const userTrue = 'LABORATORIA';
const passwordTrue = 'LABORATORIA';
let tryNumb = 0;

const validation = () => {
  const password = document.getElementById('password');
  if (password.value === passwordTrue) {
    loginSection.classList.add('hide');
    pokedexSection.classList.replace('hide', 'show');
    incubatorSection.classList.add('hide');
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

/* Seleccionar la sección de Pokedex - Incubadora*/
pokedexTitle.addEventListener('click', () => {
  pokedexSection.classList.remove('hide');
  incubatorSection.classList.add('hide');
})

incubatorTitle.addEventListener('click', () => {
  incubatorSection.classList.remove('hide');
  pokedexSection.classList.add('hide');
})

/*
dato: función
p1: data => array
retorna: string => template de la propiedades de los objetos que tiene data
*/

const showPokemon = (data) => {
  let templatePokemon = '';
  data.map(obj => {
    templatePokemon += `
    <div id="${obj.id}" class="show-pokemon flex">
      <figure></figure>
      <p>${obj.num}</p>
      <img src="${obj.img}"/>
      <p class="name-pokemon flex">${obj.name}</p>
      <p>${obj.type}</p>
    </div>`;
  });
  return templatePokemon;
};
allPokedex.innerHTML = showPokemon(dataGlobal);

/* Ordena AZ / ZA*/
alfaSelect.addEventListener('change', (event) => {
  switch (event.target.value) {
    case '0':
      allPokedex.innerHTML = showPokemon(sortAlfa(dataGlobal));
      break;
    case '1':
      allPokedex.innerHTML = showPokemon(sortAlfa(dataGlobal).reverse());
      break;
  };
});

/* Filtra por aparición*/
spawnSelect.addEventListener('change', () => {
  switch (spawnSelect.value) {
    case 'asc':
      allPokedex.innerHTML = showPokemon(sortSpawn(dataGlobal));
      break;
    case 'desc':
      allPokedex.innerHTML = showPokemon(sortSpawn(dataGlobal).reverse());
      break;
  };
});

/* Buscar a un pokémon */
inputSearch.addEventListener('input', event => {
  const pokemonWanted = searchPokemons(dataGlobal, event.target.value.toLowerCase());
  allPokedex.innerHTML = showPokemon(pokemonWanted);
  console.log(event.target.value);

 });

/* Filtra por tipo */
typeSelect.addEventListener('click', (event) => {
  let targetTypeValue = event.target.value;
  if (targetTypeValue !== undefined) {
  const typePokemon = filterTypes(dataGlobal, targetTypeValue);
  allPokedex.innerHTML = showPokemon(typePokemon);
}});

/* Filtra por debilidad */
weakSelect.addEventListener('change', () => {
  const weakPokemons = filterWeakness(dataGlobal, weakSelect.value);
  allPokedex.innerHTML = showPokemon(weakPokemons);
});

/* Modal */ /* MODIFICA EL MODAL */
allPokedex.addEventListener('click', (event) => {
  const id = event.target.parentElement.getAttribute('id') -1;
  modalMask.classList.remove('hide');
  infoPokemon.innerHTML = `
    <img class="img-modal" src="${dataGlobal[id].img}"/>
    <h1 class="name-modal">${dataGlobal[id].name}</h1>
    <div class="fact-container">
      <div class="fact">
        <p class="fact-style">${dataGlobal[id].weight}</p>
        <span>Peso</span>
      </div>
      <div class="fact">
          <p class="fact-style">${dataGlobal[id].height}</p>
          <span>Altura</span>
      </div>
      <div class="fact">
      <p class="fact-style">${dataGlobal[id].candy_count}</p>
      <span>caramelos</span>
      </div>
    </div>
    <div class="type-container">
    <div class="type-poke-modal">
    <p>Tipo:</p>
    <img src=""/>
    <p>${dataGlobal[id].type}</p>
    </div>
    </div>
    <p>${dataGlobal[id].avg_spawns}%</p>
    <p>${dataGlobal[id].weaknesses}</p>
    </div>`
    console.log(id);
}); 

/* Cerrar Modal */
close.addEventListener('click', () => {
  modalMask.classList.add('hide');
});

/* Filtra por tipo de huevos */
eggSelect.addEventListener('click', (event) => {
  let targetEggValue = event.target.value;
  const typeEgg = filterEggs(dataGlobal, targetEggValue); // Esto es un array
 
  const typeEggCount = typeEgg.length;
  const typeEggPercent = Math.round((typeEggCount * 100)/151);
  eggPokedex.innerHTML = showPokemon(typeEgg);

  switch (targetEggValue) {
    case 'Not in Eggs':
    eggDescriptionPercent.innerHTML = `
    <p>${typeEggCount}/151</p>
    <p>El ${typeEggPercent}% de los pokémons de la región Kanto
    jamás podrá ser incubado.<br>
    <p>¡Conoce quien son esos pokémons!</p>
    `
    break;
    case '7 km': 
    eggDescriptionPercent.innerHTML = `
    <p>${typeEggCount}/151</p>
    <p>Ningún pokémon de la Región Kanto es incubado en
    huevos de ${targetEggValue}.<br>
    `
    break;
    default:
    eggDescriptionPercent.innerHTML = `
    <p>${typeEggCount}/151</p>
    <p>De los 151 pokémons de la región Kanto, el ${typeEggPercent}% es
    incubado en huevos de ${targetEggValue}.<br>
    <p>¡Conoce quien son esos pokémons!</p>
    `}
});

/* Función que despliega el side menu */ /* MODIFICA EL MODAL */
const logoLink = document.getElementById('filter-icon');
const showMenu = () => {
  const menu = document.getElementById('filter-panel');

  if(menu.classList.contains('hide')){
    menu.classList.remove("hide");
    menu.classList.add('show');
    menu.style.width = '380px';
    allPokedex.style.marginLeft = '250px';
  } 
  else{
    menu.classList.remove('show');
    menu.classList.add('hide');
    menu.style.width = '0';
    allPokedex.style.marginLeft = '0';
  }
}

logoLink.addEventListener('click', showMenu);

/* Pokemones atrapados 
catchedPokedex.addEventListener('click', (event) => {
  switch (event.target.value) {
    case '1':
      allPokedex.innerHTML = showPokemon(catchedPokemon(dataGlobal));
      break;
    case '0':
      allPokedex.innerHTML = showPokemon(unCatchedPokemon(dataGlobal));
      break;
  };
});*/