# @statisticsnorway/design-css

This package provides the main CSS entry point for applications built with SSB's design system.

It combines:

- Digdir's base CSS (`@digdir/designsystemet-css`)
- SSB's design tokens (via `@statisticsnorway/design-theme`)
- Roboto font definitions

## Installation

```bash
npm install @statisticsnorway/design-css
```

## Usage

Import the package in your application entry file:

```js
import '@statisticsnorway/design-css'
```

Or in CSS:

```css
@import '@statisticsnorway/design-css';
```

If you are using `@statisticsnorway/design-react`, you do not need to install this package separately.

## Fonts

The Roboto font is defined but not applied globally. To use it across your application, add the following to your global styles:

```css
body {
  font-family: var(--ds-font-family);
}
```

The included Roboto font files are licensed under Apache License 2.0.
See `LICENSE-ROBOTO` for details.

## Status

🚧 Under active development.
