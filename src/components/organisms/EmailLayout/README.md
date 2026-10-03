# EmailLayout

The email page, on white: brand header (logo or name), a centered card for the content and the footer. It sets the theme for everything inside.

## Usage

```tsx
import { createEmailTheme, EmailFooter, EmailLayout, EmailText } from '@inzumer/email';

<EmailLayout
  lang="en"
  preview="Your account is ready"
  brand={{ name: 'Milimon', logoUrl: 'https://example.com/logo.png' }}
  theme={createEmailTheme({ colors: { primary: '#f29a3e' } })}
  footer={<EmailFooter reason="You created an account." />}
>
  <EmailText>Hi!</EmailText>
</EmailLayout>;
```

## Accessibility

Follows the Email Markup Consortium guidance: a `<title>`, the content wrapped in
`role="article"` with `aria-roledescription="email"` and the email name, and regions for the header
(`banner`), the content (`main`) and the footer (`contentinfo`). Use one `h1` per email (the hero or
the first `EmailHeading`).

## Props

- `lang` — language of the email
- `preview` — text the inbox shows next to the subject
- `title` — name of the email for screen readers and the web view (usually the subject); `preview` by default
- `brand` — `name` and an optional `logoUrl` (absolute)
- `theme` — from `createEmailTheme`; the default one otherwise
- `hero` — an `EmailHero` on top, instead of the simple brand header
- `footer` — usually an `EmailFooter`
- `children` — the content of the card
