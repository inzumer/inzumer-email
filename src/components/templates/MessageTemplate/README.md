# MessageTemplate

A ready-made message from props: welcome, notice or confirmation, with an optional highlight and action.

## Usage

```tsx
import { MessageTemplate } from '@inzumer/email';

<MessageTemplate
  lang="en"
  preview="Your account is ready"
  brand={{ name: 'Milimon' }}
  title="Hi, Ana!"
  paragraphs={['Your account is ready.']}
  highlight={{ title: 'What is saved', items: ['Your calculations'] }}
  action={{ href: 'https://example.com', label: 'Get started' }}
  footer={{ reason: 'You created an account.' }}
/>;
```

## Props

- `lang`, `preview`, `brand`, `theme` — as in `EmailLayout`
- `title` and `paragraphs` — the message
- `highlight` — a card with a title and bullet points
- `action` — a button (`href`, `label`)
- `children` — extra content right after the action
- `note` and `signature` — closing lines
- `footer` — the `EmailFooter` props
