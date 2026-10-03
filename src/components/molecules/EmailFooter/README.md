# EmailFooter

Small print under the card, set apart by a divider line: why they get the email, links and the unsubscribe.

## Usage

```tsx
import { EmailFooter } from '@inzumer/email';

<EmailFooter
  reason="You get this email because you created an account."
  links={[{ href: 'https://example.com/privacy', label: 'Privacy' }]}
  unsubscribe={{ href: 'https://example.com/unsubscribe', label: 'Unsubscribe' }}
/>;
```

## Props

- `reason` — why they get the email
- `links` — links in a row, separated by " · "
- `unsubscribe` — the unsubscribe link, required for newsletters
