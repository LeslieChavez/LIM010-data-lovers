global.window = global;
// global.assert = require('chai').assert;
require('../src/data');
require('./data.spec.js');

const data = [
  {
    'id': 41,
    'num': '041',
    'name': 'Zubat',
    'img': 'http://www.serebii.net/pokemongo/pokemon/041.png',
    'type': [
      'Poison',
      'Flying'
    ],
    'egg': '2 km',
    'spawn_chance': 6.52,
    'avg_spawns': 652,
    'spawn_time': '12:28',
    'multipliers': [
      2.6,
      3.67
    ],
    'weaknesses': [
      'Electric',
      'Ice',
      'Psychic',
      'Rock'
    ]
  }, {
    'id': 42,
    'num': '042',
    'name': 'Golbat',
    'img': 'http://www.serebii.net/pokemongo/pokemon/042.png',
    'type': [
      'Poison',
      'Flying'
    ],
    'egg': 'Not in Eggs',
    'spawn_chance': 0.42,
    'avg_spawns': 42,
    'spawn_time': '02:15',
    'multipliers': null,
    'weaknesses': [
      'Electric',
      'Ice',
      'Psychic',
      'Rock'
    ],
    'prev_evolution': [{
      'num': '041',
      'name': 'Zubat'
    }]
  }, {
    'id': 145,
    'num': '145',
    'name': 'Zapdos',
    'img': 'http://www.serebii.net/pokemongo/pokemon/145.png',
    'type': [
      'Electric',
      'Flying'
    ],
    'egg': 'Not in Eggs',
    'spawn_chance': 0,
    'avg_spawns': 0,
    'spawn_time': 'N/A',
    'multipliers': null,
    'weaknesses': [
      'Ice',
      'Rock'
    ]
  }, {
    'id': 144,
    'num': '144',
    'name': 'Articuno',
    'img': 'http://www.serebii.net/pokemongo/pokemon/144.png',
    'type': [
      'Ice',
      'Flying'
    ],
    'egg': 'Not in Eggs',
    'spawn_chance': 0,
    'avg_spawns': 0,
    'spawn_time': 'N/A',
    'multipliers': null,
    'weaknesses': [
      'Fire',
      'Electric',
      'Rock',
      'Steel'
    ]
  }
];

const outputSearch = [
  {
    'id': 41,
    'num': '041',
    'name': 'Zubat',
    'img': 'http://www.serebii.net/pokemongo/pokemon/041.png',
    'type': [
      'Poison',
      'Flying'
    ],
    'egg': '2 km',
    'spawn_chance': 6.52,
    'avg_spawns': 652,
    'spawn_time': '12:28',
    'multipliers': [
      2.6,
      3.67
    ],
    'weaknesses': [
      'Electric',
      'Ice',
      'Psychic',
      'Rock'
    ],
  }, {
    'id': 145,
    'num': '145',
    'name': 'Zapdos',
    'img': 'http://www.serebii.net/pokemongo/pokemon/145.png',
    'type': [
      'Electric',
      'Flying'
    ],
    'egg': 'Not in Eggs',
    'spawn_chance': 0,
    'avg_spawns': 0,
    'spawn_time': 'N/A',
    'multipliers': null,
    'weaknesses': [
      'Ice',
      'Rock'
    ]
  }
];

describe('searchPokemons', () => {
  it('debería retornar un array con los pokemones cuyo nombre empiecen con z', () => {
    expect(searchPokemons(data, 'z')).toEqual(outputSearch);
  });
});

const outputSortSpawn = [
  {
    'id': 145,
    'num': '145',
    'name': 'Zapdos',
    'img': 'http://www.serebii.net/pokemongo/pokemon/145.png',
    'type': [
      'Electric',
      'Flying'
    ],
    'egg': 'Not in Eggs',
    'spawn_chance': 0,
    'avg_spawns': 0,
    'spawn_time': 'N/A',
    'multipliers': null,
    'weaknesses': [
      'Ice',
      'Rock'
    ]
  }, {
    'id': 144,
    'num': '144',
    'name': 'Articuno',
    'img': 'http://www.serebii.net/pokemongo/pokemon/144.png',
    'type': [
      'Ice',
      'Flying'
    ],
    'egg': 'Not in Eggs',
    'spawn_chance': 0,
    'avg_spawns': 0,
    'spawn_time': 'N/A',
    'multipliers': null,
    'weaknesses': [
      'Fire',
      'Electric',
      'Rock',
      'Steel'
    ]
  }, {
    'id': 42,
    'num': '042',
    'name': 'Golbat',
    'img': 'http://www.serebii.net/pokemongo/pokemon/042.png',
    'type': [
      'Poison',
      'Flying'
    ],
    'egg': 'Not in Eggs',
    'spawn_chance': 0.42,
    'avg_spawns': 42,
    'spawn_time': '02:15',
    'multipliers': null,
    'weaknesses': [
      'Electric',
      'Ice',
      'Psychic',
      'Rock'
    ],
    'prev_evolution': [{
      'num': '041',
      'name': 'Zubat'
    }]
  }, {
    'id': 41,
    'num': '041',
    'name': 'Zubat',
    'img': 'http://www.serebii.net/pokemongo/pokemon/041.png',
    'type': [
      'Poison',
      'Flying'
    ],
    'egg': '2 km',
    'spawn_chance': 6.52,
    'avg_spawns': 652,
    'spawn_time': '12:28',
    'multipliers': [
      2.6,
      3.67
    ],
    'weaknesses': [
      'Electric',
      'Ice',
      'Psychic',
      'Rock'
    ],
  }
];

describe('sortSpawn', () => {
  it('debería retornar un array con los pokemones ordenados por propiedad spawn_chance', () => {
    expect(sortSpawn(data)).toEqual(outputSortSpawn);
  });
});

describe('filterWeakness', () => {
  it('debería retornar un array con los pokemones ordenados por debilidad', () => {
    expect(filterWeakness(data, 'Electric')[0].weaknesses).toEqual(['Fire', 'Electric', 'Rock', 'Steel']);
  });
});

describe('filterTypes', () => {
  it('debería retornar un array con los pokemones ordenados por tipo', () => {
    expect(filterTypes(data, 'Poison')[0].type).toEqual(['Poison', 'Flying']);
  });
});

const outputEgg = [
  {
    'id': 41,
    'num': '041',
    'name': 'Zubat',
    'img': 'http://www.serebii.net/pokemongo/pokemon/041.png',
    'type': [
      'Poison',
      'Flying'
    ],
    'egg': '2 km',
    'spawn_chance': 6.52,
    'avg_spawns': 652,
    'spawn_time': '12:28',
    'multipliers': [
      2.6,
      3.67
    ],
    'weaknesses': [
      'Electric',
      'Ice',
      'Psychic',
      'Rock'
    ],
  }
];

describe('filterEggs', () => {
  it('debería retornar un array con los pokemones ordenados por el tipo de huevo', () => {
    expect(filterEggs(data, '2 km')).toEqual(outputEgg);
  });
});

describe('sortAlfa', () => {
  it('debería retornar un array con los pokemones ordenados alfabeticamente', () => {
    expect(sortAlfa(data, '0')[0].name).toEqual('Articuno');
  });
});