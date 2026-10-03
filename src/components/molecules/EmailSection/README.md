# EmailSection

A block with its own background, to tell apart the parts of a long email (an intro, a recipe, a tip).
The headings and texts inside use its text colors. Each brand picks the colors; Milimon can choose
them from the theme the person saved in their profile.

## Usage

```tsx
import { EmailHeading, EmailSection, EmailText } from '@inzumer/email';

<EmailSection colors={{ background: '#FDF1E4' }}>
  <EmailHeading level={2}>Tip of the week</EmailHeading>
  <EmailText>Weigh the flour, don't measure it in cups.</EmailText>
</EmailSection>;

<EmailSection colors={{ background: '#2F201B', text: '#FDF7F1', textSecondary: '#EADFD6' }}>
  …
</EmailSection>;
```

## Props

- `colors` — `background`, and `text` / `textSecondary` for dark backgrounds
- `children` — the content
