# Releasing

## Versioning (Changesets)

This repository uses Changesets to manage versioning and releases.

### Strategy

Packages are versioned independently.

- `@statisticsnorway/design-theme`
- `@statisticsnorway/design-css`
- `@statisticsnorway/design-react`

These packages have a dependency chain:

- `design-css` depends on `design-theme`
- `design-react` depends on `design-css`

When a package changes, only that package is versioned accordingly.

Dependent packages may receive a patch version bump when internal dependencies are updated. This is handled automatically by Changesets.

If a change affects both React components and component styling, both `design-react` and `design-css` should be selected when creating a changeset.

This ensures that versioning reflects actual changes while keeping internal dependencies in sync.

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
