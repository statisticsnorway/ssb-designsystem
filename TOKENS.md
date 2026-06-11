# Design tokens

## Update tokens

When `designsystemet.config.json` changes, run:

```bash
pnpm tokens:create
pnpm tokens:build
```

This regenerates:

- `design-tokens/`
- `packages/css/theme/`

## Build CSS theme

When token source files have changed and you only want to regenerate the CSS theme, run:

```bash
pnpm tokens:build
```

This updates the generated CSS files without recreating `design-tokens/`.

Use `pnpm tokens:create` when token config/sources change and `design-tokens/` must be regenerated.
