# AGENTS.md

## Overview

This repository contains Statistics Norway's design system.

The design system is built on top of Digdir's Designsystemet and consists of:

- `@statisticsnorway/design-theme`
- `@statisticsnorway/design-css`
- `@statisticsnorway/design-react`

## Tech Stack

- TypeScript
- React
- Vite
- Storybook
- pnpm workspaces

## Architecture

- `design-theme` contains SSB design tokens and theme CSS.
- `design-css` contains shared CSS, fonts, and imports Digdir base CSS.
- `design-react` re-exports Digdir React components and contains SSB-specific React components.
- `apps/storybook` is used for documentation and visual verification.

## Foundation

Statistics Norway's design system is built on top of Digdir's Designsystemet.

The following packages are considered source of truth:

- @digdir/designsystemet-react
- @digdir/designsystemet-css
- @digdir/designsystemet-theme
- @digdir/designsystemet-types

SSB packages should extend or re-export Digdir functionality where needed, and avoid unnecessary divergence.

## Commands

Run from repository root:

- pnpm storybook
- pnpm storybook:build
- pnpm build
- pnpm test
- pnpm format
- pnpm tokens:update
