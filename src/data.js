/* Buscar a un pokémon */
const searchPokemons = (data, wanted) => {
  return data.filter(obj => obj.name.toLowerCase().startsWith(wanted));
};

/* Filtra por debilidad */
const filterWeakness = (data, weakness) => {
  return data.filter(obj => obj.weaknesses.indexOf(weakness) > -1);
};

/* Filtra por tipo */
const filterTypes = (data, types) => {
  return data.filter(obj => obj.type.indexOf(types) > -1);
};

/* Filtrado por tipo de huevos */
const filterEggs = (data, typeEgg) => {
  return data.filter(obj => obj.egg.indexOf(typeEgg) > -1);
};

/* Ordenar por Aparición */
const sortSpawn = (data) => {
  return data.sort((prev, next) => prev.spawn_chance - next.spawn_chance);
};

/* Ordenar Alfabeticamente*/
const sortAlfa = (data) => {
  return data.sort((prev, next) => {
    if (prev.name > next.name) {
      return 1;
    } else {
      return -1;
    }
  });
};

window.searchPokemons = searchPokemons;
window.sortSpawn = sortSpawn;
window.sortAlfa = sortAlfa;
window.filterWeakness = filterWeakness;
window.filterTypes = filterTypes;
window.filterEggs = filterEggs;
