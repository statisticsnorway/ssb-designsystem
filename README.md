# SSB Designsystem

This repository contains the source code for Statistics Norway’s design system.

The design system is built on top of Digdir’s Designsystemet and includes design tokens, themes, shared CSS, and React components.

The repository is organized as a monorepo using pnpm workspaces.

---

## Packages

### `@statisticsnorway/design-theme`

Contains generated design tokens, theme CSS, and TypeScript theme definitions for SSB’s visual profile.

### `@statisticsnorway/design-css`

Shared CSS package containing Digdir base styles, fonts, and SSB-specific CSS overrides.

### `@statisticsnorway/design-react`

React components for SSB Designsystem, based on Digdir’s Designsystemet.

---

## Development

### Package manager

This project uses pnpm.

Install dependencies:

```bash
pnpm install
```

Run Storybook:

```bash
pnpm storybook
```

Build packages:

```bash
pnpm build
```

### Testing

Run all tests from the workspace root:

```bash
pnpm test
```

Run tests for the React package only:

```bash
pnpm --filter @statisticsnorway/design-react test
```

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

The packages are published, but APIs and package structure may change while the design system is being established.
