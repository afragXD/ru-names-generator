import { animals, colors, ruNameGenerator } from '../../dist/index.js';

export const name = ruNameGenerator({
  dictionaries: [colors, animals],
  separator: '-',
  length: 2,
  style: 'lowerCase',
});
