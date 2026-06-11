## Design tokens

### Updating design tokens

1. Update the theme configuration in `designsystemet.config.json`, usually by exporting changes from the Digdir Theme Builder.

2. Run from the repository root:

```bash
pnpm tokens:update
```

This regenerates:

- `design-tokens/` – token source files
- `packages/css/theme/` – generated CSS theme files used by applications

Then commit the generated updates together with the config change.

If you have made manual changes in generated token files, review them before commit and avoid committing unintended manual edits.
