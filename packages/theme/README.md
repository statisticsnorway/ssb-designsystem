# @statisticsnorway/design-theme

This package provides the SSB theme, including design tokens and theme definitions for Designsystemet.

## Installation

```bash
npm install @statisticsnorway/design-theme
```

## Usage

Import the theme in your application entry file:

```js
import '@statisticsnorway/design-theme'
```

Or import the theme file directly:

```js
import '@statisticsnorway/design-theme/ssb.css'
```

Or in CSS:

```css
@import '@statisticsnorway/design-theme/ssb.css';
```

## TypeScript

If you are using TypeScript and SSB theme colors, add the theme types to your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["@statisticsnorway/design-theme"]
  }
}
```

This enables type support for SSB-specific theme colors such as `accent`, `brand1`, `brand2`, and `neutral` when using Designsystemet components.

## Related packages

- `@statisticsnorway/design-css` – fonts and base styling
- `@statisticsnorway/design-react` – React components

## Status

🚧 Under active development.
