# EmailBanner

A full-width image (a cover, a promo) with the theme radius. With `href`, the whole banner is a link.

## Usage

```tsx
import { EmailBanner } from '@inzumer/email';

<EmailBanner
  src="https://example.com/cover.png"
  alt="Lemon loaf on a plate"
  href="https://example.com"
/>;
```

## Props

- `src` — absolute image URL (email clients can't load relative paths)
- `alt` — what the image shows; many clients block images until the reader allows them
- `href` — optional link for the whole banner
