# Storybook (SSB Designsystem)

This Storybook is used to preview components from the SSB Designsystem.

## Preview (Chromatic)

Storybook is published to Chromatic for easy sharing with designers and stakeholders.

> Note: Access requires being added as a collaborator in the Chromatic project.

## Status

Chromatic is currently used for sharing Storybook previews.
The setup may evolve as we establish a more permanent publishing solution.

## Automatic publishing

Storybook is automatically published to Chromatic when a pull request is opened or updated.

This includes changes in:

- `apps/storybook`
- `packages/**`

## Local development

To run Storybook locally (from the root of the repository):

    pnpm storybook

## Build locally (Chromatic equivalent)

To verify that Storybook builds correctly (same step used by Chromatic):

    pnpm storybook:build

## Manual publish (optional)

It is still possible to publish manually if needed:

    pnpm --filter @ssb/storybook chromatic -- --project-token=<TOKEN>

> The project token must be stored locally (e.g. password manager) and should **not** be committed to the repository.

## Important

- Chromatic builds run automatically via GitHub Actions
- Preview updates are triggered by pull requests and relevant changes only
- Do not commit the project token to the repository

## Example preview URL

    https://<branch>--<project-id>.chromatic.com
