# EmailCard

A highlighted block inside the email (a summary, a list): a border in the theme's border color and a soft shadow, no fill. Gmail and Outlook drop the shadow, so there the border alone frames it.

## Usage

```tsx
import { EmailCard, EmailHeading, EmailText } from '@inzumer/email';

<EmailCard>
  <EmailHeading level={2}>What is saved</EmailHeading>
  <EmailText>• Your calculations</EmailText>
</EmailCard>;
```

## Props

- `children` — the content
