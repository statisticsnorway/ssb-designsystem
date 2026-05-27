# SSB Designsystem – React

React components for SSB’s design system.

This package currently re-exports components from `@digdir/designsystemet-react` and will gradually be extended with SSB-specific components.

## Installation

```bash
npm install @statisticsnorway/design-react @statisticsnorway/design-css
```

## Load styles

You must load the design system stylesheet once in your application.

Example: import the stylesheet from your JavaScript or TypeScript entrypoint:

```tsx
import '@statisticsnorway/design-css'
```

Example locations include `main.tsx`, `main.jsx`, `App.tsx`, or another top-level component.

Alternatively, import the stylesheet from your main CSS file:

```css
@import '@statisticsnorway/design-css';
```

## Usage

```tsx
import { Button, Heading, Paragraph } from '@statisticsnorway/design-react'

export function App() {
  return (
    <>
      <Heading level={1}>Hello from SSB Designsystem</Heading>
      <Paragraph>Use SSB-styled components based on Digdir’s Designsystemet.</Paragraph>
      <Button>Continue</Button>
    </>
  )
}
```

## Fonts

The Roboto font is included in the stylesheet package but is not applied globally.

To use it across your application, add the following to your global styles:

```css
body {
  font-family: var(--ds-font-family);
}
```

The included Roboto font files are licensed under Apache License 2.0.

## Status

🚧 This package is under active development.
