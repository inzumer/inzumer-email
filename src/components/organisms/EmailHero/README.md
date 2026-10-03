# EmailHero

The header of the email: logo, title and subtitle in one block, on a solid color or over a full image,
with the brand's heading font. Pass it to `EmailLayout` as `hero` (it replaces the simple brand
header).

Background images don't show in Outlook: `background` is painted behind as a fallback, so pick a
color that keeps the text readable. For an image without text, use `EmailBanner`.

## Usage

```tsx
import { EmailHero, EmailLayout } from '@inzumer/email';

<EmailLayout
  lang="en"
  preview="New recipe"
  brand={{ name: 'Milimon' }}
  hero={
    <EmailHero logo={{ src: 'https://example.com/logo.png', alt: 'Milimon' }} title="New recipe" />
  }
>
  …
</EmailLayout>;

<EmailHero
  image="https://example.com/cover.png"
  background="#2F201B"
  textColor="#ffffff"
  title="Lemon loaf"
/>;
```

## Props

- `title` and `subtitle`
- `logo` — `src` (absolute) and `alt`, on top
- `background` — solid color (the theme primary by default), also the fallback behind `image`
- `image` — background image URL, with the texts over it
- `textColor` — color of the texts (the theme's primary text color by default)
- `overlay` — how much the image is darkened so the texts read, from 0 to 1 (0.45 by default)
