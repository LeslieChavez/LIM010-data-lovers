/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const example = () => {
  return 'example';
};

window.example = example;
*/
const pokerData = (pokemon) => {
  const empty = [];
  for (let i = 0; i < pokemon.length; i++);
  empty.push({ 
    img: pokemon[i].img,
    nombre: pokemon[i].name,
  });
  return empty; 
};

window.pokemon = {
  pokerData: pokerData,
};

// ordenamiento de a -z

const ordenarAlfb = (data, opcion) => {
  const arrSortPok = data.sort((ab, bc) => {
    /* a es menor que b según criterio de ordenamiento */
    if (ab.name > bc.name) {
      return 1;
    } if (ab.name < bc.name) {
      return -1;
    }
    return 0;
  });
  if (opcion === '0') {
    return arrSortPok;
  }
  if (opcion === '1') {
    return arrSortPok.reverse();
  }
  return 0;
};

window.ordenarAlfb = ordenarAlfb;