# SSB Designsystemet

Foundation for Statistics Norway’s design system.

In the first phase, this repository manages SSB’s visual profile and design tokens based on Digdir’s Designsystemet.

The structure and workflow are currently being established.

## Design tokens

### Updating design tokens

1. Update the theme configuration in `designsystemet.config.json`, usually by exporting changes from the Digdir Theme Builder.

2. Run from the repository root:

```bash
npm run tokens:update
```

This regenerates:

- `design-tokens/` – token source files
- `packages/theme/generated/ssb.css` – the CSS theme used by applications
