# ru-names-generator

Генератор читаемых уникальных имён из русских словарей: берёт по одному слову из каждого словаря и склеивает их через разделитель.

## Установка

```bash
npm install ru-names-generator
```

## Использование

```ts
import { ruNameGenerator } from 'ru-names-generator';

const name = ruNameGenerator({
  dictionaries: ['adjectives', 'colors', 'animals'],
  separator: '-',
  length: 3,
  style: 'lowerCase',
});

// например: "тихий-синий-кот"
console.log(name);
```

Доступные словари: `adjectives`, `animals`, `colors`, `languages`.

## API

### `ruNameGenerator(options): string`

| Опция | Тип | Описание |
| --- | --- | --- |
| `dictionaries` | `ReadonlyArray<DictionaryKey>` | Ключи встроенных словарей |
| `separator` | `string` | Разделитель между словами |
| `length` | `number` | Сколько словарей использовать с начала списка |
| `style` | `'lowerCase' \| 'upperCase' \| 'capitalize'` | Регистр результата |

### Типы

```ts
import type { DictionaryKey, RuNameGenerator, Style } from 'ru-names-generator';
```

## Scripts

- `bun run build` — typecheck и сборка библиотеки
- `bun run check` — lint и format (Biome)
- `bun run lint` — Biome check
- `bun run format` — Biome format

## License

MIT
