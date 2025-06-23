const typeChart = {
  Normal: {
    weakTo: ['Fighting'],
    resists: [],
    immuneTo: ['Ghost']
  },
  Fire: {
    weakTo: ['Water', 'Rock', 'Ground'],
    resists: ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy'],
    immuneTo: []
  },
  Water: {
    weakTo: ['Electric', 'Grass'],
    resists: ['Fire', 'Water', 'Ice', 'Steel'],
    immuneTo: []
  },
  Electric: {
    weakTo: ['Ground'],
    resists: ['Electric', 'Flying', 'Steel'],
    immuneTo: []
  },
  Grass: {
    weakTo: ['Fire', 'Ice', 'Poison', 'Flying', 'Bug'],
    resists: ['Water', 'Electric', 'Grass', 'Ground'],
    immuneTo: []
  },
  Ice: {
    weakTo: ['Fire', 'Fighting', 'Rock', 'Steel'],
    resists: ['Ice'],
    immuneTo: []
  },
  Fighting: {
    weakTo: ['Flying', 'Psychic', 'Fairy'],
    resists: ['Bug', 'Rock', 'Dark'],
    immuneTo: []
  },
  Poison: {
    weakTo: ['Ground', 'Psychic'],
    resists: ['Grass', 'Fighting', 'Poison', 'Bug', 'Fairy'],
    immuneTo: []
  },
  Ground: {
    weakTo: ['Water', 'Ice', 'Grass'],
    resists: ['Poison', 'Rock'],
    immuneTo: ['Electric']
  },
  Flying: {
    weakTo: ['Electric', 'Ice', 'Rock'],
    resists: ['Grass', 'Fighting', 'Bug'],
    immuneTo: ['Ground']
  },
  Psychic: {
    weakTo: ['Bug', 'Ghost', 'Dark'],
    resists: ['Fighting', 'Psychic'],
    immuneTo: []
  },
  Bug: {
    weakTo: ['Fire', 'Flying', 'Rock'],
    resists: ['Grass', 'Fighting', 'Ground'],
    immuneTo: []
  },
  Rock: {
    weakTo: ['Water', 'Grass', 'Fighting', 'Ground', 'Steel'],
    resists: ['Normal', 'Fire', 'Poison', 'Flying'],
    immuneTo: []
  },
  Ghost: {
    weakTo: ['Ghost', 'Dark'],
    resists: ['Poison', 'Bug'],
    immuneTo: ['Normal', 'Fighting']
  },
  Dragon: {
    weakTo: ['Ice', 'Dragon', 'Fairy'],
    resists: ['Fire', 'Water', 'Electric', 'Grass'],
    immuneTo: []
  },
  Dark: {
    weakTo: ['Fighting', 'Bug', 'Fairy'],
    resists: ['Ghost', 'Dark'],
    immuneTo: ['Psychic']
  },
  Steel: {
    weakTo: ['Fire', 'Fighting', 'Ground'],
    resists: [
      'Normal', 'Grass', 'Ice', 'Flying', 'Psychic',
      'Bug', 'Rock', 'Dragon', 'Steel', 'Fairy'
    ],
    immuneTo: ['Poison']
  },
  Fairy: {
    weakTo: ['Poison', 'Steel'],
    resists: ['Fighting', 'Bug', 'Dark'],
    immuneTo: ['Dragon']
  }
};
