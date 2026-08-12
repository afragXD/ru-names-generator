import type { Style } from '../model/types';

/*
 * @param string - строка для форматирования
 * @param style - стиль форматирования
 * @returns форматированная строка
 */
export const formatString = (string: string, style: Style) => {
  switch (style) {
    case 'lowerCase':
      return string.toLowerCase();
    case 'upperCase':
      return string.toUpperCase();
    case 'capitalize':
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    default:
      return string;
  }
};
