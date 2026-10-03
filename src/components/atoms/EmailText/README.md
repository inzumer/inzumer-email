# EmailText

A paragraph of the email.

## Usage

```tsx
import { EmailText } from '@inzumer/email';

<EmailText>Your account is ready.</EmailText>;
<EmailText variant="small">The link expires in 30 minutes.</EmailText>;
```

## Props

- `variant` — `body` (default), `secondary` for less important lines or `small` for notes
- `children` — the text
