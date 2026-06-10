## Design tokens

### Updating design tokens

1. Update the theme configuration in `designsystemet.config.json`, usually by exporting changes from the Digdir Theme Builder.

2. Run from the repository root:

```bash
npm run tokens:update
```

This regenerates:

- `design-tokens/` – token source files
- `packages/css/theme/ssb.css` – the CSS theme used by applications
