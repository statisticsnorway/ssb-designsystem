# @statisticsnorway/design-css

This package provides the main CSS entry point for applications built with SSB's design system.

It includes:

- Digdir's base CSS (`@digdir/designsystemet-css`)
- SSB theme definitions (`@statisticsnorway/design-css/theme`)
- Roboto font definitions
- SSB-specific CSS overrides

## Installation

```bash
npm install @statisticsnorway/design-css
```

## Usage

Import base CSS and theme once in your application entry file:

```js
import '@statisticsnorway/design-css'
import '@statisticsnorway/design-css/theme'
```

You can also import the root CSS file explicitly:

```js
import '@statisticsnorway/design-css/index.css'
import '@statisticsnorway/design-css/theme.css'
```

Or in CSS:

```css
@import '@statisticsnorway/design-css';
@import '@statisticsnorway/design-css/theme.css';
```

`@statisticsnorway/design-theme` still works during transition, but new integrations should use `@statisticsnorway/design-css/theme`.

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
