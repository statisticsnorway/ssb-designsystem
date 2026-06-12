# Releasing

## Versioning (Changesets)

This repository uses Changesets to manage versioning and releases.

### Strategy

Packages are versioned independently:

- `@statisticsnorway/design-css`
- `@statisticsnorway/design-react`

Changesets should include all affected packages.

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
pnpm changeset:version
```

This will:

- Update package.json versions
- Update or create CHANGELOG.md files
- Remove processed changeset files

### Publishing

To publish packages to npm:

```bash
pnpm changeset:release
```

This builds and publishes all updated packages.

> Note: Publishing is not fully set up yet.
