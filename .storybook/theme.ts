import { create } from 'storybook/theming';

const FONT = "Inter, 'Helvetica Neue', Arial, sans-serif";

export const theme = create({
  base: 'light',
  fontBase: FONT,
  colorPrimary: '#151515',
  colorSecondary: '#151515',
  brandTitle: `<span style="font-family:${FONT};font-size:20px;font-weight:700;line-height:1;color:#151515;text-transform:uppercase">INZ.EMAILS</span>`,
  brandUrl: 'https://ui-emails.inzumer.com/',
  brandTarget: '_self',
});
