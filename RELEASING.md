# Releasing

## Versioning (Changesets)

This repository uses Changesets to manage versioning and releases.

### Strategy

All design system packages are versioned together:

- `@statisticsnorway/design-theme`
- `@statisticsnorway/design-css`
- `@statisticsnorway/design-react`

These packages are tightly coupled:

- `design-css` depends on `design-theme`
- `design-react` depends on `design-css`

For this reason, they are released as a single unit and always share the same version.

> Note: This strategy may evolve as the design system matures.

### Creating a changeset

Each changeset describes the impact of a change and is used to determine the next version.
Run:

```bash
pnpm changeset
```

Then:

- Select affected packages
- Choose the appropriate version bump:
  - patch – bug fixes or small changes
  - minor – new features (non-breaking)
  - major – breaking changes

A changeset file will be created in `.changeset/`.
This file should be committed together with your changes.

### Versioning

To apply changesets and update package versions and changelogs:

```bash
pnpm version-packages
```

This will:

- Update package.json versions
- Update or create CHANGELOG.md files
- Remove processed changeset files

### Publishing

To publish packages to npm:

```bash
pnpm release
```

This builds and publishes all updated packages.

> Note: Publishing is not fully set up yet.
