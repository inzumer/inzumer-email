import { EmailPreview } from '@/preview';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { ActionTemplate, type ActionTemplateProps } from './ActionTemplate';
import { MessageTemplate, type MessageTemplateProps } from './MessageTemplate';

const site = 'https://example.com';
const brand = { name: 'Inzumer' };

const meta: Meta = { title: 'Plantillas' };

export default meta;

const message = (title: string, props: MessageTemplateProps): StoryObj => ({
  render: () => <EmailPreview title={title} email={<MessageTemplate {...props} />} />,
});

const action = (title: string, props: ActionTemplateProps): StoryObj => ({
  render: () => <EmailPreview title={title} email={<ActionTemplate {...props} />} />,
});

export const BienvenidaEs: StoryObj = message('Bienvenida', {
  lang: 'es',
  brand,
  preview: 'Ya podés guardar todo en tu cuenta.',
  title: '¡Hola, Ana!',
  paragraphs: ['Tu cuenta está lista. Desde ahora lo que hagas queda guardado.'],
  highlight: { title: 'Qué se guarda', items: ['Tus cálculos', 'Tus recetas favoritas'] },
  action: { href: site, label: 'Empezar' },
  note: 'Podés borrar tu cuenta cuando quieras.',
  signature: 'Saludos, el equipo',
  footer: {
    reason: 'Te llega porque creaste una cuenta.',
    links: [{ href: site, label: 'Privacidad' }],
  },
});

export const BienvenidaEn: StoryObj = message('Welcome', {
  lang: 'en',
  brand,
  preview: 'Everything you do is now saved to your account.',
  title: 'Hi, Ana!',
  paragraphs: ['Your account is ready. From now on, everything you do is saved.'],
  highlight: { title: 'What is saved', items: ['Your calculations', 'Your favorite recipes'] },
  action: { href: site, label: 'Get started' },
  note: 'You can delete your account at any time.',
  signature: 'Cheers, the team',
  footer: {
    reason: 'You get this because you created an account.',
    links: [{ href: site, label: 'Privacy' }],
  },
});

export const AvisoEs: StoryObj = message('Aviso', {
  lang: 'es',
  brand,
  preview: 'Tus datos ya no están en nuestros servidores.',
  title: 'Tu cuenta fue eliminada',
  paragraphs: [
    'Borramos tu cuenta y todos sus datos.',
    'Si fue un error, podés crear una nueva cuando quieras.',
  ],
  footer: { reason: 'Te llega porque pediste borrar tu cuenta.' },
});

export const AvisoEn: StoryObj = message('Notice', {
  lang: 'en',
  brand,
  preview: 'Your data is no longer on our servers.',
  title: 'Your account was deleted',
  paragraphs: [
    'We deleted your account and all of its data.',
    'If it was a mistake, you can create a new one anytime.',
  ],
  footer: { reason: 'You get this because you asked to delete your account.' },
});

export const AccionEs: StoryObj = action('Acción por enlace', {
  lang: 'es',
  brand,
  preview: 'Un clic para confirmar tu email.',
  title: 'Confirmá tu email',
  paragraphs: ['Tocá el botón para confirmar que este email es tuyo.'],
  action: { href: `${site}/confirm?token=123`, label: 'Confirmar email' },
  fallback: 'Si el botón no funciona, pegá este enlace en el navegador:',
  expires: 'El enlace vence en 30 minutos.',
  footer: { reason: 'Te llega porque alguien usó este email para registrarse.' },
});

export const AccionEn: StoryObj = action('Action by link', {
  lang: 'en',
  brand,
  preview: 'One click to confirm your email.',
  title: 'Confirm your email',
  paragraphs: ['Tap the button to confirm this email is yours.'],
  action: { href: `${site}/confirm?token=123`, label: 'Confirm email' },
  fallback: 'If the button does not work, paste this link in your browser:',
  expires: 'The link expires in 30 minutes.',
  footer: { reason: 'You get this because someone signed up with this email.' },
});
