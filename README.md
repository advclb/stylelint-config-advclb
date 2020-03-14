# Adventure Club Stylelint Shareable Configuration

- SCSS support
- Prettier support

## Installation

```bash
npm install --save-dev prettier stylelint @advclb/stylelint-config
```

Edit .stylelintrc.json:

```json
{
  "extends": ["@advclb/stylelint-config"]
}
```

For library project:

```json
{
  "extends": ["@advclb/stylelint-config", "@advclb/stylelint-config/library"]
}
```

## Copyright

2020 Guo Yunhe

## License

GNU General Public License version 3
