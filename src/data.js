/* Manejo de data */

// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

/* const example = () => {
  return 'example';
};

window.example = example;
*/
const dataPoker = (pokemon) => {
  const vacio = [];
  for (let i = 0; i < pokemon.length; i++);
  vacio.push({ 
    img: pokemon[i].img,
    nombre: pokemon[i].name,
  });
  return vacio; 
};

window.pokemon = {
  dataPoker: dataPoker,
};
