const dataGlobal = POKEMON.pokemon;
/* Login */
const loginSection = document.getElementById('login-section');
const pokedexSection = document.getElementById('pokedex-section');
const headerTop = document.getElementById('header'); // Agregue el header 
const user = document.getElementById('user');
const password = document.getElementById('password');
const errorMessage = document.getElementById('error-message')
const enterButton = document.getElementById('enter-button');

/* Header - Titles*/
const pokedexTitle = document.getElementById('pokedex-title');
const incubatorTitle = document.getElementById('incubator-title');

/* Pokedex */
const inputSearch = document.getElementById('input-search');
const submitSearch = document.getElementById('submitSearch');
const allPokedex = document.getElementById('all-pokedex');

/* Filter */
const filterMenu = document.getElementById('filter-menu');
const filterIcon = document.getElementById('filter-icon');


const alfaSelect = document.getElementById('alfa-select');
const spawnSelect = document.getElementById('spawn-select');
const typeSelect = document.getElementById('type-select'); // padre de botones
const weaknessSelect = document.getElementById('weakness-select');

/* Modal */
const modalMask = document.getElementById('modal-mask');
const modalBox = document.getElementById('modal-box');
const infoPokemon = document.getElementById('info-pokemon');
const close = document.getElementById('close');

/* Incubadora */
const incubatorSection = document.getElementById('incubator-section');
const eggSelect = document.getElementById('egg-select');
const eggPokedex = document.getElementById('egg-pokedex');
const eggDescriptionPercent = document.getElementById('egg-description-percent');


/* Acceso al Login */
const userTrue = 'LABORATORIA';
const passwordTrue = 'LABORATORIA';

enterButton.addEventListener('click', () => {
  if (password.value === passwordTrue) {
    loginSection.classList.add('hide');
    filterMenu.classList.add('hide');
    pokedexSection.classList.replace('hide', 'show');
    incubatorSection.classList.add('hide');
    headerTop.classList.replace('hide', 'show'); // Agregue el header 
    event.preventDefault();
  } else {
    errorMessage.innerHTML = 'Usuario o contraseña incorrecto';
    user.value = null;
    password.value = null;
  };
});

/* Header-nav: Pokedex - Incubadora*/
pokedexTitle.addEventListener('click', () => {
  pokedexSection.classList.remove('hide');
  incubatorSection.classList.add('hide');
  pokedexTitle.classList.add('now-title-nav'); 
  incubatorTitle.classList.remove('now-title-nav');
});

incubatorTitle.addEventListener('click', () => {
  incubatorSection.classList.remove('hide');
  pokedexSection.classList.add('hide');
  incubatorTitle.classList.add('now-title-nav');
  pokedexTitle.classList.remove('now-title-nav');
});

/* Div de Pokémons - Pokedex*/
const showPokemon = (data) => {
  let templatePokemon = '';
  data.map(obj => {
    templatePokemon += `
    <div id="${obj.id}" name="pokemon" class="show-pokemon flex">
      <figure class="circle-shadow flex"></figure>
      <img class="img-pokemon flex" src="${obj.img}"/>
      <p class="id-num-pokemon">${obj.num}</p>
      <p class="name-pokemon flex">${obj.name}</p>
      <p class="type-pokemon" >${obj.type}</p>
    </div>`;
  });
  return templatePokemon;
};
allPokedex.innerHTML = showPokemon(dataGlobal);

/* Buscar a un pokémon */
inputSearch.addEventListener('input', event => {
  const pokemonWanted = searchPokemons(dataGlobal, event.target.value.toLowerCase());
  allPokedex.innerHTML = showPokemon(pokemonWanted);
});

/* Filtra por tipo */
typeSelect.addEventListener('click', (event) => {
  let targetTypeValue = event.target.value;
  if (targetTypeValue !== undefined) {
    const typePokemon = filterTypes(dataGlobal, targetTypeValue);
    allPokedex.innerHTML = showPokemon(typePokemon);
  }
});

/* Filtra por debilidad */
weaknessSelect.addEventListener('change', () => {
  const weakPokemons = filterWeakness(dataGlobal, weaknessSelect.value);
  allPokedex.innerHTML = showPokemon(weakPokemons);
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

/* Open Modal */
const openModal = () => {
  const eventIdPokemon = parseInt(event.target.parentElement.id);
  const newArrayPokemon = dataGlobal.map(obj => {
    return obj.id;
  }).indexOf(eventIdPokemon);
  if (event.target.parentElement.getAttribute('name') === 'pokemon') {
    modalMask.classList.remove('hide');
    infoPokemon.innerHTML = `
    <img class="img-modal" src="${dataGlobal[newArrayPokemon].img}"/>
    <p class="name-modal">${dataGlobal[newArrayPokemon].name}</p>
    <p class="num-modal">${dataGlobal[newArrayPokemon].num}</p>
    <figure class="line-green"><figure>
    <div class="fact-container">
      <div class="fact">
        <p class="fact-style">${dataGlobal[newArrayPokemon].weight}</p>
        <span>Peso</span>
      </div>
      <div class="fact">
        <p class="fact-style">${dataGlobal[newArrayPokemon].height}</p>
        <span>Altura</span>
      </div>
      <div class="fact">
        <p class="fact-style">${dataGlobal[newArrayPokemon].candy_count}</p>
        <span>Caramelos</span>
      </div>
    </div>
    <div class="type-container"></div>
    <div class="type-poke-modal"></div>
    <p>Tipo</p>
    <img src=""/>
    <p>${dataGlobal[newArrayPokemon].type}</p> 
    <p>${dataGlobal[newArrayPokemon].avg_spawns}</p> 
    <p>${dataGlobal[newArrayPokemon].weaknesses}</p>
    <p>${dataGlobal[newArrayPokemon].next_evolution}</p>
    `;
    console.log(eventIdPokemon);
  }
};

/* Pokedex Modal */
allPokedex.addEventListener('click', () => {
  openModal();
});

/* Cerrar Modal */
close.addEventListener('click', () => {
  modalMask.classList.add('hide');
});

/* Sección Incubadora */
eggSelect.addEventListener('change', () => {
  const showPokemonEgg = (data) => {
    let templateEggPokemon = '';
    data.map(obj => {
      templateEggPokemon += `
      <div id="${obj.id}" name="pokemon" class="show-pokemon flex">
        <figure class="circle-shadow"></figure>
        <img src="${obj.img}"/>
        <p>${obj.egg}</p>
        <p class="name-pokemon flex" >${obj.name}</p>
        <p>${obj.type}</p></div>
        `;
    });
    return templateEggPokemon;
  };
  
  eggPokedex.innerHTML = showPokemonEgg(dataGlobal);
  eggPokedex.addEventListener('click', () => {
    openModal();
  });

  const typeEgg = filterEggs(dataGlobal, eggSelect.value); // Esto es un array

  const typeEggCount = typeEgg.length;
  const typeEggPercent = Math.round((typeEggCount * 100) / 151);
  eggPokedex.innerHTML = showPokemonEgg(typeEgg);

  switch (eggSelect.value) {
  case 'Not in Eggs':
    eggDescriptionPercent.innerHTML = `
    <p>El ${typeEggPercent}% (${typeEggCount}) de los pokémons de la región Kanto
    jamás podrá ser incubado.<br>¡Conoce quien son esos pokémons!</p>
    `;
    break;
  case '7 km':
    eggDescriptionPercent.innerHTML = `
    <p>Ningún pokémon de la Región Kanto es incubado en
    huevos de ${eggSelect.value}.<br>
    `;
    break;
  default:
    eggDescriptionPercent.innerHTML = `
    <p>De los 151 pokémons de la región Kanto, el ${typeEggPercent}% (${typeEggCount}) es
    incubado en huevos de ${eggSelect.value}.<br>¡Conoce quien son esos pokémons!</p>
    `;
  }
});

/* Función que despliega el side menu */
 

let filterOpen = 0;

filterIcon.addEventListener('click', ()=> {
  if (filterOpen === 0) {
    filterMenu.classList.remove('hide');
    filterMenu.classList.add('filter-show');
    filterOpen = 1;
  } else {
    filterMenu.classList.remove('filter-show');
    filterOpen = 0;
  }
  console.log(filterOpen);
});
