# Storybook (SSB Designsystem)

This Storybook is used to preview components from the SSB Designsystem.

## Preview (Chromatic)

Storybook is published to Chromatic for easy sharing with designers and stakeholders.

> Note: Access requires being added as a collaborator in the Chromatic project.

## Status

Chromatic is currently used for sharing Storybook previews.
The setup may evolve as we establish a more permanent publishing solution.

## Updating the preview (manual)

To publish a new version to Chromatic:

1. Make sure you are on the correct branch
2. Run:

   npm run chromatic -w apps/storybook -- --project-token=<TOKEN>

> The project token must be stored locally (e.g. password manager) and should **not** be committed to the repository.

## Important

- Chromatic builds are **not triggered automatically** on push
- Preview must be published manually
- Do not commit the project token to the repository

## Example preview URL

    https://<branch>--<project-id>.chromatic.com
