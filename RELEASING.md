# Releasing

## Versioning (Changesets)

This repository uses Changesets to manage versioning and releases.

### Strategy

Packages are versioned independently.

- `@statisticsnorway/design-theme`
- `@statisticsnorway/design-css`
- `@statisticsnorway/design-react`

These packages can be used independently or together, depending on the integration.

Typical combinations:

- `design-theme` + Digdir packages
- `design-theme` + `design-css` + Digdir packages
- `design-theme` + `design-css` + `design-react`

No package installs another package automatically. The consuming application must explicitly install and import the packages it needs.

When a package changes, only that package is versioned accordingly.

Packages are published independently, so Changesets does not automatically bump other packages unless they are selected in the same changeset.

If a change affects multiple packages (for example React components and styling), select all affected packages in the changeset.

This ensures that versioning reflects actual changes across the packages users need to upgrade together.

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
