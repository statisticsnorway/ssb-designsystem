# SSB Designsystemet

This repository contains the foundation of Statistics Norway’s design system.

It is currently focused on establishing SSB’s visual profile and design tokens, based on Digdir’s Designsystemet.

The structure, packages, and workflows are under active development and may change.

---

## Current scope

In this initial phase, the repository includes:

- Design tokens (colors, typography, etc.)
- A theme package containing generated design tokens and theme CSS
- A CSS package that combines Digdir base styles, SSB theme, and fonts
- A React package that re-exports components from Digdir and includes styling for SSB usage

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

---

## Design tokens

See [TOKENS.md](./TOKENS.md) for details on how to update and build tokens.

---

## Status

🚧 This is a work in progress.

The repository will evolve to include:

- A React component package
- Documentation and usage guidelines

Packages are not yet published and may change.

## Release (planned)

Publishing is not set up yet, and packages are currently private.

## Versioning

All design system packages share the same version and are released together.

See [RELEASING.md](./RELEASING.md) for details.
