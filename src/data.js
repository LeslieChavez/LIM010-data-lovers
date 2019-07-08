/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const example = () => {
  return 'example';
};

window.example = example; */

const newPokeData = (pokemon) => {
  const empty = [];
  for (let i = 0; i < pokemon.length; i++) {
    empty.push({ 
      img: pokemon[i].img,
      name: pokemon[i].name,
    });
  };
  return empty; 
};

const ordenaAtoZ = (data, clickOrder) => {
  const arrSortName = data.sort((ab, bc) => {
    /* a es menor que b según criterio de ordenamiento */
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

const orderSpawn = (data, clickOrder) => {
  const arrSpawn = data.sort((ab, bc) => {
    /* a es menor que b según criterio de ordenamiento */
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

window.POKEMON = POKEMON;
window.ordenaAtoZ = ordenaAtoZ;
window.newPokeData = newPokeData; 
window.orderSpawn = orderSpawn;

