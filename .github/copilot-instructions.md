# Copilot Instructions for SSB Designsystem

Use [AGENTS.md](../AGENTS.md) as the primary source of truth for repository guidance.

## Copilot-specific rules

- Follow conventions and workflows defined in [AGENTS.md](../AGENTS.md).
- Prefer minimal, targeted changes and avoid touching unrelated files.
- Do not edit generated files directly; update source and regenerate.
- Keep public API changes deliberate and documented.
- Run relevant validation commands for the scope of your change.

## Quick checks

- Component behavior changed: run `pnpm test`.
- Package output affected: run `pnpm build`.
- Token source changed: run `pnpm tokens:update`.

## References

- [AGENTS.md](../AGENTS.md)
- [README.md](../README.md)
- [TOKENS.md](../TOKENS.md)
- [RELEASING.md](../RELEASING.md)
