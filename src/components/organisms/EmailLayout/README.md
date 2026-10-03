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

## Props

- `lang` — language of the email
- `preview` — text the inbox shows next to the subject
- `brand` — `name` and an optional `logoUrl` (absolute)
- `theme` — from `createEmailTheme`; the default one otherwise
- `footer` — usually an `EmailFooter`
- `children` — the content of the card
