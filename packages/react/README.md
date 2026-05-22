# SSB Designsystem – React

React components for SSB’s design system.

This package re-exports components from `@digdir/designsystemet-react` and will gradually be extended with SSB-specific components.
All necessary styling is included — you do not need to install `@statisticsnorway/design-css` or `@statisticsnorway/design-theme` separately.

---

## Installation

```bash
npm install @statisticsnorway/design-react
```

## Usage

```tsx
import { Button, Heading, Paragraph } from '@statisticsnorway/design-react'
```

## Fonts

The Roboto font is included but not applied globally.
To use it across your application, add the following to your global styles:

```css
body {
  font-family: var(--ds-font-family);
}
```

The included Roboto font files are licensed under Apache License 2.0.

## Status

🚧 Under active development.
