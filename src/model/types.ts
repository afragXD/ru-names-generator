export type Style = 'lowerCase' | 'upperCase' | 'capitalize';

export type Dictionary = readonly string[];

export interface RuNameGenerator {
  dictionaries: ReadonlyArray<Dictionary>;
  separator: string;
  length: number;
  style: Style;
}
