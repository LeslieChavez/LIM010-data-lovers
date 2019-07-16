/*dato: función
  p1: data => array,
  p2: wanted => string que representa el nombre del pokemon
*/

/* Ordenar Alfabeticamente*/
const sortAlfa = (data) => {
  return data.sort((prev, next) => {
    if (prev.name > next.name) {return 1};
    if (prev.name < next.name) {return -1};
    return 0;
  });
};

/* Ordenar por Aparición */
const sortSpawn = (data) => {
  return data.sort((prev, next) => prev.spawn_chance - next.spawn_chance)
};

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

/* Pokemones atrapados / no atrapados */
const catchedPokemon = (data) => {
  return data.filter(obj => obj.multipliers !== null);
};

const unCatchedPokemon = (data) => {
  return data.filter(obj => obj.multipliers === null)
};

/* Filtrado por tipo de huevos */
const filterEggs = (data, typeEgg) => {
  return data.filter(obj => obj.egg.indexOf(typeEgg) > -1)
};

window = {
  searchPokemons: searchPokemons,
  sortAlfa: sortAlfa,
  sortSpawn: sortSpawn,
  filterWeakness: filterWeakness,
  filterTypes: filterTypes,
  catchedPokemon: catchedPokemon,
  unCatchedPokemon: unCatchedPokemon,
  filterEggs: filterEggs
}
