# CLAUDE.md

`inzumer-email`: the `@inzumer/email` package (React Email components themed with
`@inzumer/tokens`). Shared packages follow `inzumer-<name>` → `@inzumer/<name>`; consumers are the
email templates of each project (Milimon: `milimon-emails-react`).

- Everything must work in email clients: tables and inline styles only, no CSS variables,
  classes, flexbox or JavaScript; images with absolute URLs.
- The theme holds concrete values; brands override them with `createEmailTheme`.
- Arrow functions only; short comments (one or two lines).
- `pnpm check` and `pnpm test:coverage` (90%) before a PR; Conventional Commits; PRs to `main`.
- Every published change needs a changeset. Never commit or push unless asked.
