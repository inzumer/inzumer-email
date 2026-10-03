# EmailSocialLinks

A centered row of network icons, each linking to the profile. Icons are PNG (email clients don't show
SVG): the default gray ones (the same family as the `@inzumer/ui-library` icons) are published with this
package's Storybook, or pass a brand's own with
`iconUrl`. The network name is the `alt`, so it reads well with images blocked.

## Usage

```tsx
import { EmailSocialLinks } from '@inzumer/email';

<EmailSocialLinks
  links={[
    { network: 'pinterest', href: 'https://www.pinterest.com/…' },
    { network: 'instagram', href: 'https://www.instagram.com/…' },
    { network: 'linkedin', href: 'https://www.linkedin.com/…' },
  ]}
/>;
```

## Props

- `links` — `network` (pinterest, instagram, linkedin, facebook, x, youtube, tiktok, whatsapp),
  `href` and an optional `iconUrl`

Usually passed to `EmailFooter` as `social`.
