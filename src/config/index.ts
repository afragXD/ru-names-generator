import { adjectives } from './adjectives';
import { animals } from './animals';
import { colors } from './colors';
import { languages } from './languages';

export const dictionaryMap = {
  adjectives,
  animals,
  colors,
  languages,
} as const;

export type DictionaryKey = keyof typeof dictionaryMap;
