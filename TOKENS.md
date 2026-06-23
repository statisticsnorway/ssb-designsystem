# Design tokens

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

- adding `font-weight.bold` to SSB typography primitives
- setting heading typography in `design-tokens/semantic/style.json` to use `{font-weight.bold}`
- exposing `font-weight.bold` in `design-tokens/themes/ssb.json`

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
