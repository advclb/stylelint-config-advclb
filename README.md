# Adventure Club Stylelint Shareable Configuration

- SCSS support
- Prettier support

## Installation

```bash
npm install --save-dev prettier stylelint stylelint-config-advclb
```

Edit .stylelintrc.json:

```json
{
  "extends": ["stylelint-config-advclb"]
}
```

For library project:

```json
{
  "extends": ["stylelint-config-advclb", "stylelint-config-advclb/library"]
}
```

## Copyright

2020 Guo Yunhe

## License

GNU General Public License version 3
