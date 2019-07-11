const arrayPokemon = (pokemon) => {
  const newArrayPokemon = [];
  for (let i = 0; i < pokemon.length; i++) {
    newArrayPokemon.push({ 
      id: pokemon[i].id, 
  		num: pokemon[i].num,  		
  		name: pokemon[i].name,
  		img: pokemon[i].img,
  		type: pokemon[i].type,
      height: pokemon[i].height,
      weight: pokemon[i].weight,
      candy: pokemon[i].candy,
      candyCount: pokemon[i].candy_count,
      egg: pokemon[i].egg,
      avgSpawns: pokemon[i].avg_spawns,
      multipliers: pokemon[i].multipliers,
      weaknesses: pokemon[i].weaknesses,
      prevEvolution: pokemon[i].prev_evolution,
      nextEvolution: pokemon[i].next_evolution
    });
  };
  return newArrayPokemon; 
};

/* Busca a tu Pokemon */
const searchPokemons = (dataGlobal, wanted) => {
  return dataGlobal.filter(element => {
    return element.name.toLowerCase().indexOf(wanted) >= 0;
  });
};

/* Ordenar Alfabeticamente */
const sortAlfa = (data, clickOrder) => {
  const arrSortName = data.sort((ab, bc) => {
    if (ab.name > bc.name) {
      return 1;
    } if (ab.name < bc.name) {
      return -1;
    }
    return 0;
  });
  if (clickOrder === '0') {
    return arrSortName;
  }
  if (clickOrder === '1') {
    return arrSortName.reverse();
  }
  return 0;
}; 

/* Ordenar por Aparición */
const orderSpawn = (data, clickOrder) => {
  const arrSpawn = data.sort((ab, bc) => {
    if (ab.spawn_chance > bc.spawn_chance) {
      return 1;
    } if (ab.spawn_chance < bc.spawn_chance) {
      return -1;
    }
    return 0;
  });
  if (clickOrder === '0') {
    return arrSpawn;
  }
  if (clickOrder === '1') {
    return arrSpawn.reverse();
  }
  return 0;
}; 

/* Filta por debilidad */
const filterWeakness = (dataGlobal, weakness) => {
  return dataGlobal.filter(element => {
    return element.weaknesses.indexOf(weakness) > -1;
  });
};

const filterTypes = (dataGlobal, types) => {
  return dataGlobal.filter(element => {
    return element.type.indexOf(types) > -1;
  });
};


const catchedPokemon = () => {
  return dataGlobal.filter(element => {
    return element.multipliers !== null;
  });
};

const unCatchedPokemon = () => {
  return dataGlobal.filter(element => {
    return element.multipliers === null;
  });
};

window.POKEMON = POKEMON;
window.sortAlfa = sortAlfa;
window.arrayPokemon = arrayPokemon; 
window.orderSpawn = orderSpawn;
window.filterWeakness = filterWeakness;
window.filterTypes = filterTypes;
window.searchPokemons = searchPokemons;


window.catchedPokemon = catchedPokemon;
window.unCatchedPokemon = unCatchedPokemon;
