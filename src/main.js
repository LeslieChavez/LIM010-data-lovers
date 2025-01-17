const dataGlobal = POKEMON.pokemon;
/* Login */
const loginSection = document.getElementById('login-section');
const pokedexSection = document.getElementById('pokedex-section');
const headerTop = document.getElementById('header'); // Agregue el header 
const user = document.getElementById('user');
const password = document.getElementById('password');
const errorMessage = document.getElementById('error-message');
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
    pokedexTitle.classList.add('now-title-nav');
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
  filterMenu.classList.add('hide');
});


/* Div de Pokémons - Pokedex*/
const showPokemon = (data) => {
  let templatePokemon = '';
  data.map(obj => {
    templatePokemon += `
    <div class="show-pokemon flex">
      <div id="${obj.id}" name="pokemon" class="flex">
        <figure class="circle-shadow flex"></figure>
        <img class="img-pokemon flex" src="${obj.img}"/>
      </div>
      <p class="name-pokemon flex">${obj.name}</p>
      <div class="icon-and-title">
      <img class="icon-type" src="img/type-pokemon-png/${obj.type[0]}.png">
      <p class="type-title-pokemon"><strong>Tipo</strong><br>${obj.type.join(' & ')}</p>
      </div>
    </div>`;
  });
  return templatePokemon;
};
allPokedex.innerHTML = showPokemon(dataGlobal);

/* Función que despliega menu de filtro */
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
});

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
  const objId = dataGlobal.map(obj => {
    return obj.id;
  }).indexOf(eventIdPokemon);
  if (event.target.parentElement.getAttribute('name') === 'pokemon') {
    modalMask.classList.remove('hide');
    infoPokemon.innerHTML = `
    <img class="img-modal" src="${dataGlobal[objId].img}"/>
    <p class="name-modal">${dataGlobal[objId].name}</p>
    <p class="num-modal">#${dataGlobal[objId].num}</p>
    <figure class="line-green-modal"></figure>
    <div class="fact-container flex">
      <div class="fact">
        <p class="fact-style">${dataGlobal[objId].weight}</p>
        <span>Peso</span>
      </div>
      <div class="fact">
        <p class="fact-style">${dataGlobal[objId].height}</p>
        <span>Altura</span>
      </div>
      <div class="fact">
        <p class="fact-style">${dataGlobal[objId].candy_count}<span>
        <img class="icon-modal" src="img/icon-pokemon/candy.png"></span></p>
        <span>Caramelos</span>
      </div>
    </div>
    <div class="subtitles-container">
    <p class="subtitles-modal">Tipo: <span class="data-modal">${dataGlobal[objId].type.join(' | ')}</span></p> 
    <p class="subtitles-modal">Promedio de aparición: <span class="data-modal">${Math.round(dataGlobal[objId].avg_spawns * 1000)} / 10 000</span></p> 
    <p class="subtitles-modal">Hora de aparición: <span class="data-modal">${dataGlobal[objId].spawn_time}</span></p> 
    <p class="subtitles-modal">Débil a: <span class="data-modal">${dataGlobal[objId].weaknesses.join(' | ')}</span></p>
    <p class="subtitles-modal">Tipo de huevo: <img class="icon-modal" src="img/icon-pokemon/egg.svg"><span class="data-modal">${dataGlobal[objId].egg}</span></p>
    </div>
    `;
  }
};

/* Abre el Modal en la sección Pokedex */
allPokedex.addEventListener('click', () => {
  openModal();
});

/* Cerrar Modal */
close.addEventListener('click', () => {
  modalMask.classList.add('hide');
});
modalMask.addEventListener('click', () => {
  modalMask.classList.add('hide');
});

/* Sección Incubadora */
eggSelect.addEventListener('change', () => {
  const showPokemonEgg = (data) => {
    let templateEggPokemon = '';
    data.map(obj => {
      templateEggPokemon += `
      <div class="show-pokemon flex">
        <div id="${obj.id}" name="pokemon" class="flex">
          <figure class="circle-shadow flex"></figure>
          <img class="img-pokemon flex" src="${obj.img}"/>
        </div> 
        <p class="name-pokemon flex" >${obj.name}</p>
        <div class="flex">
        <span><img class="icon-modal" src="img/icon-pokemon/egg.svg"></span>
        <span><p class="type-pokemon flex">${obj.egg}</p></span>
        </div>
      </div>
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
    <p>Ningún pokémon de la Región Kanto es incubado en huevos de ${eggSelect.value}.<br><br>
    <img src="img/icon-web/pokemon-no-found.svg" class="header-logo flex">
    `;
    break;
  default:
    eggDescriptionPercent.innerHTML = `
    <p>De los 151 pokémons de la región Kanto, ${typeEggCount} <strong>(${typeEggPercent}%)</strong> es
    incubado en huevos de ${eggSelect.value}.<br>¡Conoce quien son esos pokémons!</p>
    `;
  }
});

