import { addons } from 'storybook/manager-api';
import { create } from 'storybook/theming';

// The logo is text in the brand font (no image), like the other Inzumer Storybooks.
const theme = create({
  base: 'light',
  brandTitle: `<span style="display:inline-block;padding:4px 10px;border-radius:8px;background:#111111;color:#ffffff;font-family:Inter,'Helvetica Neue',Arial,sans-serif;font-weight:800;letter-spacing:0.5px">INZ.EMAILS</span>`,
  brandUrl: 'https://ui-emails.inzumer.com/',
  brandTarget: '_self',
});

addons.setConfig({ theme });
