# Design tokens

## Configuration files

- `designsystemet.config.json` contains the Designsystemet configuration, including theme configuration and token sources.
- `build-token.json` builds CSS and TypeScript types from Design Tokens. The `types` output generates `types.d.ts`

## Update tokens

When `designsystemet.config.json` changes, run:

```bash
pnpm tokens:update
```

This regenerates:

- `design-tokens/`
- `packages/css/theme/`

`pnpm tokens:update` runs these steps in order:

```bash
pnpm tokens:create
pnpm tokens:inject
pnpm tokens:build
```

`tokens:inject` runs `scripts/inject-token-overrides.ts` and applies SSB token overrides after generation and before CSS build.

Current overrides include:

- Setting heading typography in `design-tokens/semantic/style.json` to use the existing `{font-weight.semibold}` token (600).

## Build CSS theme

When `design-tokens/` already contains the token state you want and you only need to regenerate CSS files, run:

```bash
pnpm tokens:build
```

This updates the generated CSS files without recreating `design-tokens/`.

Use `pnpm tokens:create` when token config/sources change and `design-tokens/` must be regenerated.

## When to run which command

- Use `pnpm tokens:update` for normal token updates (recommended).
- Use `pnpm tokens:create` when you only want to regenerate `design-tokens/` from config and stop there.
- Use `pnpm tokens:inject` when you need to re-apply token overrides to an existing `design-tokens/` output.
- Use `pnpm tokens:build` when you only need to regenerate CSS theme files from existing token sources.
