# @inzumer/email

Email components built with [React Email](https://react.email) and themed with the Inzumer design
tokens: they render HTML with tables and inline styles that Gmail, Outlook and Apple Mail
understand. Part of the Inzumer shared packages (one repository per package: `inzumer-<name>`
published as `@inzumer/<name>`).

## Install

```sh
pnpm add @inzumer/email react react-dom
```

## Usage

```tsx
import {
  createEmailTheme,
  EmailButton,
  EmailFooter,
  EmailHeading,
  EmailLayout,
  EmailText,
  renderEmail,
} from '@inzumer/email';

const theme = createEmailTheme({ colors: { primary: '#f29a3e' } });

const { html, text } = await renderEmail(
  <EmailLayout
    lang="es"
    preview="Tu cuenta está lista"
    brand={{ name: 'Inzumer', logoUrl: 'https://example.com/logo.png' }}
    theme={theme}
    footer={<EmailFooter reason="Te llega porque creaste una cuenta." />}
  >
    <EmailHeading>¡Hola!</EmailHeading>
    <EmailText>Tu cuenta está lista.</EmailText>
    <EmailButton href="https://example.com">Empezar</EmailButton>
  </EmailLayout>,
);
```

| Export                                  | What it is                                                                                    |
| --------------------------------------- | --------------------------------------------------------------------------------------------- |
| `EmailLayout`                           | Page on white: brand header (logo or name), centered card, footer; `lang` and inbox `preview` |
| `EmailHeading`                          | Title (`level` 1) or section title (2)                                                        |
| `EmailText`                             | Paragraph: `body`, `secondary` or `small`                                                     |
| `EmailButton`                           | Call to action in the primary color                                                           |
| `EmailBanner`                           | Full-width image, optionally linked                                                           |
| `EmailCard`                             | Highlighted block: themed border and soft shadow, no fill                                     |
| `EmailFooter`                           | Set apart by a divider: why they get the email, links and the unsubscribe                     |
| `createEmailTheme`, `defaultEmailTheme` | Colors, fonts, radii, title styles and card shadow (from `@inzumer/tokens`)                   |
| `inzumerEmailTheme`                     | Inzumer's look: black and white, thin uppercase titles, pill buttons, border-only cards       |
| `renderEmail`                           | HTML (inline styles) and its plain-text version                                               |
| `MessageTemplate`                       | Ready-made message: title, paragraphs, highlight, action, note, signature                     |
| `ActionTemplate`                        | One action by link (confirm, reset): button, copyable link and expiry                         |
| `EmailPreview`                          | An email in a frame, rendered as sent (for Storybook)                                         |

Email clients don't read CSS variables, classes or modern layout, so the theme holds concrete
values and every style is inline. Images need absolute URLs.

## Structure

Atomic design, one folder per component with its barrel, test, story and README:

```
src/components/
  atoms/       EmailBanner, EmailButton, EmailHeading, EmailText
  molecules/   EmailCard, EmailFooter
  organisms/   EmailLayout
  templates/   ActionTemplate, MessageTemplate
src/preview/   EmailPreview (exported), EmailFrame (stories only)
src/render/    renderEmail
src/theme/     createEmailTheme, defaultEmailTheme, inzumerEmailTheme
```

## Storybook

`pnpm storybook` shows every component and template rendered as sent, in Spanish and English. The
Pages workflow publishes it on every push to `main`: <https://ui-emails.inzumer.com>.
Packages with their own emails show them the same way with `EmailPreview`.

## Development

```sh
pnpm install
pnpm check          # typecheck, lint, format check and build
pnpm test:coverage  # 90% minimum
```

## Releases

Add a changeset with `pnpm changeset`. Merging to `main` opens the "Version Packages" PR; merging
that PR publishes to npm with trusted publishing (no token).
