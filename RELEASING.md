# Releasing

## Versioning (Changesets)

This repository uses [Changesets](https://github.com/changesets/changesets) to manage versioning and releases.

### Strategy

The `@statisticsnorway/design-css` and `@statisticsnorway/design-react` packages are versioned together (fixed) and always share the same version number.

You only need to select the package(s) that are actually affected when creating a changeset.

The other package in the fixed group will automatically be bumped to the same version, even without its own changeset entry. In this case, its `CHANGELOG.md` may contain an `Updated dependencies` entry instead of a description of the change.

### Creating a changeset

Each changeset describes the impact of a change and is used to determine the next version.

Run:

```bash
pnpm changeset
```

Then:

- Select the package(s) affected by the change.
- Choose the appropriate version bump:

  - `patch` – bug fixes or small changes
  - `minor` – new features (non-breaking)
  - `major` – breaking changes

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
- Update or create `CHANGELOG.md` files
- Remove processed changeset files

### Publishing

Publishing is automated via GitHub Actions after the release PR is merged to `main`.

Use manual publish only when needed (for example a controlled fallback if CI publishing is unavailable):

```bash
pnpm changeset:release
```

This builds and publishes the updated packages to npm.

The aggregated GitHub Release is created separately by the CI workflow. It uses:

```bash
bash ./.github/workflows/scripts/create-aggregated-release.sh
```

The workflow passes the release tag and the list of published packages to the script. The script collects the relevant changelog entries and creates one GitHub Release for the shared version.

---

## Automated release with Trusted Publishing

The normal release flow is automated through GitHub Actions and Trusted Publishing.

Flow on `main`:

1. If unreleased changesets exist, CI creates or updates a release PR.
2. The release PR updates package versions and `CHANGELOG.md` files.
3. When the release PR is merged to `main`, CI publishes the updated packages to npm.
4. If packages were published, CI creates one aggregated GitHub Release.
5. The GitHub Release is tagged and titled `v<version>` and contains the changelog entries for the published packages.

### Release checklist

1. Create changeset(s): `pnpm changeset`
2. Merge the changes to `main`
3. Merge the generated release PR
4. Verify that the packages were published successfully
5. Verify the aggregated GitHub Release
6. Verify package versions on npm
