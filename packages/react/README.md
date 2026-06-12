# SSB Designsystem – React

React components for SSB Designsystem.

This package currently re-exports components and utilities from `@digdir/designsystemet-react` and will gradually be extended with SSB-specific components.

## Installation

Install the React and CSS packages:

```bash
npm install @statisticsnorway/design-css @statisticsnorway/design-react
```

## Setup

### Load styles

Import the base styles and theme in your application entrypoint, for example `main.tsx`:

```tsx
import '@statisticsnorway/design-css'
import '@statisticsnorway/design-css/theme'
```

Alternatively, import them from your main CSS file:

```css
@import '@statisticsnorway/design-css';
@import '@statisticsnorway/design-css/theme.css';
```

### Icons

If your application imports icons from `@navikt/aksel-icons`, install the package separately:

```bash
npm install @navikt/aksel-icons
```

### Fonts

The Roboto font is included in the stylesheet package but is not applied globally.

To use it across your application, add the following to your global CSS:

```css
body {
  font-family: var(--ds-font-family);
}
```

The included Roboto font files are licensed under Apache License 2.0.

## TypeScript

If you are using TypeScript, add the Designsystemet React types and SSB theme types to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["@digdir/designsystemet-react/react-types", "@statisticsnorway/design-css/theme"]
  }
}
```

This enables type support for Designsystemet React components and SSB-specific theme colors such as `primary`, `secondary`, `magic`, and `neutral`.

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

## Status

🚧 This package is under active development.
