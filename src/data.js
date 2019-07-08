/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const example = () => {
  return 'example';
};

window.example = example; */

// ordenamiento de a -z
/*
const orderAtoZ = (data, opcion) => {
  const arrSortPoke = data.sort((ab, bc) => {
    /* a es menor que b según criterio de ordenamiento 
    if (ab.name > bc.name) {
      return 1;
    } if (ab.name < bc.name) {
      return -1;
    }
    return 0;
  });
  if (opcion === '0') {
    return arrSortPoke;
  }
  if (opcion === '1') {
    return arrSortPoke.reverse();
  }
  return 0;
};

window.orderAtoZ = orderAtoZ; */

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

const ordenaAtoZ = (dataPoker) => {
  newPokeArr = [];
  const ordenador = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];
  for (let i = 0; i < ordenador.length; i++) {
    for (let j = 0; j < dataPoker.length; j++) {
      if (ordenador[j] === dataPoker[j].name[0]) {
        newPokeArr.push(dataPoker[j]);
      };
    }
  } 
  return newPokeArr;
};

window.pokemon = {
  newData: newPokeData,
  ordena: ordenaAtoZ,
};
