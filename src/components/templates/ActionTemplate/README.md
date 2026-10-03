# ActionTemplate

One action by link (confirm an email, reset a password): the button, the link to copy when the button doesn't work, and its expiry.

## Usage

```tsx
import { ActionTemplate } from '@inzumer/email';

<ActionTemplate
  lang="en"
  preview="Confirm your email"
  brand={{ name: 'Milimon' }}
  title="Confirm your email"
  paragraphs={['Tap the button to confirm it is yours.']}
  action={{ href: 'https://example.com/confirm?token=…', label: 'Confirm email' }}
  fallback="If the button does not work, paste this link in your browser:"
  expires="The link expires in 30 minutes."
  footer={{ reason: 'Someone signed up with this email.' }}
/>;
```

## Props

- Everything from `MessageTemplate` except `highlight`, `note` and `children`
- `action` — required
- `fallback` — text before the copyable link
- `expires` — when the link stops working
