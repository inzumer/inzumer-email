---
'@inzumer/email': minor
---

Breaking (0.x): emails are always white. The theme drops `colors.background` and `colors.surface`; remove them from `createEmailTheme` overrides.

- New `EmailBanner`: a full-width image, optionally linked.
- `EmailCard`: themed border and a soft shadow instead of a fill.
- `EmailButton`: space below it, so the next line no longer sticks to it.
- `EmailFooter`: a divider above it, so it reads apart from the content.
- Components follow atomic design (atoms, molecules, organisms, templates), each with its own story, README and tests.
