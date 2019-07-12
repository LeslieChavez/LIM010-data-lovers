const arrayPokemon = (p1) => {
  const newArrayPokemon = [];
  for (let i = 0; i < p1.length; i++) {
    newArrayPokemon.push({ 
      id: p1[i].id, 
  		num: p1[i].num,
  		name: p1[i].name,
  		img: p1[i].img,
  		type: p1[i].type,
      height: p1[i].height,
      weight: p1[i].weight,
      candy: p1[i].candy,
      candyCount: p1[i].candy_count,
      egg: p1[i].egg,
      avgSpawns: p1[i].avg_spawns,
      multipliers: p1[i].multipliers,
      weaknesses: p1[i].weaknesses,
      prevEvolution: p1[i].prev_evolution,
      nextEvolution: p1[i].next_evolution
    });
  };
  return newArrayPokemon; 
};

/* Busca a tu Pokemon 
  p1: array de objetos,
  p2: string que representa el nombre del pokemon
*/
const searchPokemons = (dataGlobal, wanted) => {
  return dataGlobal.filter(element => {
    return element.name.toLowerCase().startsWith(wanted);
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

/* Filtra por debilidad */
const filterWeakness = (dataGlobal, weakness) => {
  return dataGlobal.filter(element => {
    return element.weaknesses.indexOf(weakness) > -1;
  });
};

/* Filtra por tipo */
const filterTypes = (dataGlobal, types) => {
  return dataGlobal.filter(element => {
    return element.type.indexOf(types) > -1;
  });
};

/* Pokemones atrapados */
const catchedPokemon = () => {
  return dataGlobal.filter(element => {
    return element.multipliers !== null;
  });
};

/* Pokemones No atrapados */
const unCatchedPokemon = () => {
  return dataGlobal.filter(element => {
    return element.multipliers === null;
  });
};

const filterEggs = (dataGlobal, huevitos) => {
  return dataGlobal.filter(element => {
    return element.egg.indexOf(huevitos) > -1;
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
window.filterEggs = filterEggs;

