import type { DictionaryKey } from '../config';

export type Style = 'lowerCase' | 'upperCase' | 'capitalize';

export interface RuNameGenerator {
  dictionaries: ReadonlyArray<DictionaryKey>;
  separator: string;
  length: number;
  style: Style;
}
