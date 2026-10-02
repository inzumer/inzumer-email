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
    brand={{ name: 'Milimon', logoUrl: 'https://example.com/logo.png' }}
    theme={theme}
    footer={<EmailFooter reason="Te llega porque creaste una cuenta." />}
  >
    <EmailHeading>¡Hola!</EmailHeading>
    <EmailText>Tu cuenta está lista.</EmailText>
    <EmailButton href="https://example.com">Empezar</EmailButton>
  </EmailLayout>,
);
```

| Export                                  | What it is                                                                           |
| --------------------------------------- | ------------------------------------------------------------------------------------ |
| `EmailLayout`                           | Page: brand header (logo or name), centered card, footer; `lang` and inbox `preview` |
| `EmailHeading`                          | Title (`level` 1) or section title (2)                                               |
| `EmailText`                             | Paragraph: `body`, `secondary` or `small`                                            |
| `EmailButton`                           | Call to action in the primary color                                                  |
| `EmailCard`                             | Highlighted block inside the card                                                    |
| `EmailFooter`                           | Why they get the email, links and the unsubscribe                                    |
| `createEmailTheme`, `defaultEmailTheme` | Colors, fonts and radius; the defaults come from `@inzumer/tokens`                   |
| `renderEmail`                           | HTML (inline styles) and its plain-text version                                      |
| `MessageTemplate`                       | Ready-made message: title, paragraphs, highlight, action, note, signature            |
| `ActionTemplate`                        | One action by link (confirm, reset): button, copyable link and expiry                |
| `EmailPreview`                          | An email in a frame, rendered as sent (for Storybook)                                |

Email clients don't read CSS variables, classes or modern layout, so the theme holds concrete
values and every style is inline. Images need absolute URLs.

## Storybook

`pnpm storybook` shows every component and template rendered as sent, in Spanish and English. The
Pages workflow publishes it on every push to `main`: <https://inzumer.github.io/inzumer-email/>.
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
