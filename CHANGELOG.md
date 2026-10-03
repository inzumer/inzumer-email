# @inzumer/email

## 0.3.0

### Minor Changes

- 8d72813: Breaking (0.x): emails are always white. The theme drops `colors.background` and `colors.surface`; remove them from `createEmailTheme` overrides.
  
  - New `EmailBanner`: a full-width image, optionally linked.
  - `EmailCard`: themed border and a soft shadow instead of a fill.
  - `EmailButton`: space below it, so the next line no longer sticks to it.
  - `EmailFooter`: a divider above it, so it reads apart from the content.
  - Components follow atomic design (atoms, molecules, organisms, templates), each with its own story, README and tests.
- 5d6438e: Accessibility: `EmailLayout` sets the `<title>` (new `title` prop, the preview by default), wraps the email in `role="article"` with `aria-roledescription="email"`, and marks the header, content and footer as regions.
- f1ceb76: - `EmailHero`: header with logo, title and subtitle on a solid color or over a darkened image, in the heading font. `EmailLayout` takes it as `hero`.
  - `EmailSection`: a block with its own background (and text colors) to tell apart the parts of a long email.
  - `EmailSocialLinks` and `EmailFooter`'s `social`: network icons (PNG) linking to the profiles; default gray icons published with Storybook (`SOCIAL_ICONS_URL`, `socialIconUrl`).
  - `EmailBanner`: explicit width so it doesn't jump while loading.

## 0.2.0

### Minor Changes

- 081b384: `MessageTemplate` and `ActionTemplate` (ready-made emails from props) and `EmailPreview` (an email rendered as sent, in a frame, for Storybook). Storybook with every component and template is published to GitHub Pages.

## 0.1.0

### Minor Changes

- 0e51650: First release: `EmailLayout`, `EmailHeading`, `EmailText`, `EmailButton`, `EmailCard`, `EmailFooter`, the email theme (`createEmailTheme`, `defaultEmailTheme`, from `@inzumer/tokens`) and `renderEmail` (HTML with inline styles plus plain text).
