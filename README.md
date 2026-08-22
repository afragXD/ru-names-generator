# ru-names-generator

Генератор читаемых уникальных имён из русских словарей: берёт по одному слову из каждого словаря и склеивает их через разделитель.

## Установка

```bash
npm install ru-names-generator
```

## Использование

```ts
import { animals, colors, ruNameGenerator } from 'ru-names-generator';

const name = ruNameGenerator({
  dictionaries: [colors, animals],
  separator: '-',
  length: 2,
  style: 'lowerCase',
});

// например: "синий-кот"
console.log(name);
```

Импортируйте только нужные словари — bundler включит в финальный бандл только их (tree-shaking).

### Доступные словари

| Export | Описание |
| --- | --- |
| `adjectives` | Прилагательные |
| `animals` | Животные |
| `colors` | Цвета |
| `languages` | Языки |

## API

### `ruNameGenerator(options): string`

| Опция | Тип | Описание |
| --- | --- | --- |
| `dictionaries` | `ReadonlyArray<Dictionary>` | Массивы слов (импортируются отдельно) |
| `separator` | `string` | Разделитель между словами |
| `length` | `number` | Сколько словарей использовать с начала списка |
| `style` | `'lowerCase' \| 'upperCase' \| 'capitalize'` | Регистр результата |

### Типы

```ts
import type { Dictionary, RuNameGenerator, Style } from 'ru-names-generator';
```

## Migration from 0.1.x

| 0.1.x | 0.2.0 |
| --- | --- |
| `dictionaries: ['animals', 'colors']` | `dictionaries: [animals, colors]` |
| `import { ruNameGenerator } from '...'` | `import { ruNameGenerator, animals, colors } from '...'` |
| `DictionaryKey` | `Dictionary` (`readonly string[]`) |

## Scripts

- `bun run build` — typecheck и сборка библиотеки
- `bun run check` — lint и format (Biome)
- `bun run lint` — Biome check
- `bun run format` — Biome format

## License

MIT
