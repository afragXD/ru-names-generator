/*
 * @param dictionaries - список ключей словарей для генерации имени
 * @param length - длина имени
 * @throws {Error} - если словари не переданы или длина меньше 0 или больше количества словарей
 */
export const verifyParams = (
  dictionaries?: ReadonlyArray<string>,
  length?: number,
) => {
  if (!dictionaries?.length) {
    throw new Error('Dictionaries are required');
  }
  if (length && length <= 0) {
    throw new Error('Length is required');
  }
  if (length && length > dictionaries.length) {
    throw new Error('Length is greater than the number of dictionaries');
  }
};
