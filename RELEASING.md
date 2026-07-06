# Releasing

## Versioning (Changesets)

This repository uses Changesets to manage versioning and releases.

### Strategy

Packages are versioned together (fixed) and always share the same version number:

- `@statisticsnorway/design-css`
- `@statisticsnorway/design-react`

You only need to select the package(s) that actually changed when creating a changeset — the other package in the group will automatically be bumped to match, even without its own changeset entry. Its CHANGELOG.md will show a generic "Updated dependencies" line rather than a description of the change.

> **Tip:** If a package in the fixed group gets version-bumped without its own
> changeset, its CHANGELOG.md entry may end up empty or generic. You can
> manually add a short line before committing, e.g.:
>
> ```
> ### Patch Changes
>
> - Version bump only, to match `@statisticsnorway/design-react` (fixed versioning group).
> ```

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

Versioning is normally handled automatically by CI (Changesets action) after merge to `main`.

Use manual versioning only when needed (for example a controlled fallback if CI is unavailable):

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

> Publishing and GitHub release creation are automated via GitHub Actions + Changesets.

---

## Automated release with Trusted Publisher

This repository now uses Changesets in CI for both release PR creation and npm publish.

Flow on `main`:

- If unreleased changesets exist, CI updates or creates a release PR.
- When that PR is merged to `main`, CI publishes updated packages to npm and creates GitHub Releases.

### Release checklist

1. Create changeset(s): `pnpm changeset`
2. Merge to `main`
3. Merge the generated release PR
4. Verify publish job succeeded in GitHub Actions
5. Verify versions on npm
