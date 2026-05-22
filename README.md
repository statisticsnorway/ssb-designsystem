# SSB Designsystem

This repository contains the source code for Statistics Norway’s design system.

The design system is built on top of Digdir’s Designsystemet and includes design tokens, themes, shared CSS, and React components.

The repository is organized as a monorepo using pnpm workspaces.

---

## Packages

### `@statisticsnorway/design-theme`

Contains generated design tokens and theme CSS for SSB’s visual profile.

### `@statisticsnorway/design-css`

Combines Digdir base styles, SSB theme styles, and fonts into a shared CSS package.

### `@statisticsnorway/design-react`

React package that currently re-exports components from Digdir’s Designsystemet, while adding SSB-specific styling and custom components over time.

---

## Development

### Package manager

This project uses pnpm.

Install dependencies:

    pnpm install

Run Storybook:

    pnpm storybook

Build packages:

    pnpm build

### Testing

Run all tests from the workspace root:

```bash
pnpm test
```

Run tests for the React package only:

```bash
pnpm --filter @statisticsnorway/design-react test
```

Run tests once without watch mode:

```bash
pnpm --filter @statisticsnorway/design-react test:run
```

The package uses:

- Vitest
- Testing Library
- jsdom

---

## Design tokens

See [TOKENS.md](./TOKENS.md) for details on how to update and build tokens.

---

## Versioning

Design system packages are versioned independently, with internal dependencies kept in sync automatically.

See RELEASING.md for release details.

---

## Status

🚧 This project is under active development.

Packages are not yet publicly available and APIs may change.
