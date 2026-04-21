# @statisticsnorway/design-css

This package provides the main CSS entry point for SSB’s designsystem.

It combines:

- font definitions
- Digdir’s base CSS
- SSB’s theme package

## Fonts

This package includes font definitions, but does not apply them globally.

To use the SSB font across your application, you can add:

```css
body {
  font-family: var(--ds-font-family);
}
```

This package includes the Roboto font, licensed under Apache License 2.0.

## Usage

This package is intended to be the default styling entry point for applications using SSB’s design system.

## Status

🚧 Under development and not yet published.
