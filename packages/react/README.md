# SSB Designsystem – React

React components for SSB’s design system.

This package re-exports components from `@digdir/designsystemet-react` and will gradually be extended with SSB-specific components, styling, and customizations.

The goal is to provide a single React package for consumers of the SSB design system.

---

## Usage

```tsx
import { Button, Heading, Paragraph } from '@statisticsnorway/design-react'
```

## Styling

This package includes the styling needed for React usage.

You do **not** need to install or import `@statisticsnorway/design-css` or `@statisticsnorway/design-theme` separately when using this package.

## SSB Components

The package currently includes the following SSB-specific component:

- `Logo`

Example:

```tsx
import { Logo } from '@statisticsnorway/design-react'

function App() {
  return <Logo height={50} />
}
```

## Testing

Run all tests from the workspace root:

```bash
pnpm test
```

Run tests for the React package only:

```bash
pnpm --filter @statisticsnorway/design-react test
```

Run tests once without watch mode:

```bash
pnpm --filter @statisticsnorway/design-react test:run
```

The package uses:

- Vitest
- Testing Library
- jsdom
