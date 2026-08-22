import { formatString } from '../lib/formatString';
import { verifyParams } from '../lib/verifyParams';
import type { RuNameGenerator } from './types';

export const ruNameGenerator = ({
  dictionaries,
  separator,
  length,
  style,
}: RuNameGenerator): string => {
  verifyParams(dictionaries, length);

  return dictionaries.slice(0, length).reduce((acc, dictionary, index) => {
    const word = dictionary[Math.floor(Math.random() * dictionary.length)] ?? '';
    const formatted = formatString(word, style);
    return index === 0 ? formatted : `${acc}${separator}${formatted}`;
  }, '');
};
