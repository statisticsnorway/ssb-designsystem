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

Normal publishing is automated via GitHub Actions after merge to `main`.

Use manual publish only when needed (for example a controlled fallback if CI publish is unavailable):

```bash
pnpm changeset:release
```

This builds and publishes all updated packages.

> Publishing is automated via GitHub Actions + Changesets.

---

## Automated release with Trusted Publisher

This repository now uses Changesets in CI for both release PR creation and npm publish.

Flow on `main`:

- If unreleased changesets exist, CI updates or creates a release PR.
- When that PR is merged to `main`, CI publishes updated packages to npm.

### Release checklist

1. Create changeset(s): `pnpm changeset`
2. Merge to `main`
3. Merge the generated release PR
4. Verify publish job succeeded in GitHub Actions
5. Verify versions on npm
