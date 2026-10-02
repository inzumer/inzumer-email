// Builds the static gallery (gallery/) of the sample templates for GitHub Pages. Run after `pnpm build`.
import { mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { createElement } from 'react';
import { ActionTemplate, buildGallery, MessageTemplate, renderEmail } from '../dist/index.js';

const OUT = 'gallery';
const brand = { name: 'Inzumer' };
const site = 'https://example.com';

const samples = {
  welcome: {
    title: 'Bienvenida (MessageTemplate)',
    template: MessageTemplate,
    es: {
      subject: 'Tu cuenta está lista',
      props: {
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
      },
    },
    en: {
      subject: 'Your account is ready',
      props: {
        preview: 'Everything you do is now saved to your account.',
        title: 'Hi, Ana!',
        paragraphs: ['Your account is ready. From now on, everything you do is saved.'],
        highlight: {
          title: 'What is saved',
          items: ['Your calculations', 'Your favorite recipes'],
        },
        action: { href: site, label: 'Get started' },
        note: 'You can delete your account at any time.',
        signature: 'Cheers, the team',
        footer: {
          reason: 'You get this because you created an account.',
          links: [{ href: site, label: 'Privacy' }],
        },
      },
    },
  },
  notice: {
    title: 'Aviso (MessageTemplate sin acción)',
    template: MessageTemplate,
    es: {
      subject: 'Borramos tu cuenta',
      props: {
        preview: 'Tus datos ya no están en nuestros servidores.',
        title: 'Tu cuenta fue eliminada',
        paragraphs: [
          'Borramos tu cuenta y todos sus datos.',
          'Si fue un error, podés crear una nueva cuando quieras.',
        ],
        footer: { reason: 'Te llega porque pediste borrar tu cuenta.' },
      },
    },
    en: {
      subject: 'We deleted your account',
      props: {
        preview: 'Your data is no longer on our servers.',
        title: 'Your account was deleted',
        paragraphs: [
          'We deleted your account and all of its data.',
          'If it was a mistake, you can create a new one anytime.',
        ],
        footer: { reason: 'You get this because you asked to delete your account.' },
      },
    },
  },
  action: {
    title: 'Acción por enlace (ActionTemplate)',
    template: ActionTemplate,
    es: {
      subject: 'Confirmá tu email',
      props: {
        preview: 'Un clic para confirmar tu email.',
        title: 'Confirmá tu email',
        paragraphs: ['Tocá el botón para confirmar que este email es tuyo.'],
        action: { href: `${site}/confirm?token=123`, label: 'Confirmar email' },
        fallback: 'Si el botón no funciona, pegá este enlace en el navegador:',
        expires: 'El enlace vence en 30 minutos.',
        footer: { reason: 'Te llega porque alguien usó este email para registrarse.' },
      },
    },
    en: {
      subject: 'Confirm your email',
      props: {
        preview: 'One click to confirm your email.',
        title: 'Confirm your email',
        paragraphs: ['Tap the button to confirm this email is yours.'],
        action: { href: `${site}/confirm?token=123`, label: 'Confirm email' },
        fallback: 'If the button does not work, paste this link in your browser:',
        expires: 'The link expires in 30 minutes.',
        footer: { reason: 'You get this because someone signed up with this email.' },
      },
    },
  },
};

const emails = await Promise.all(
  Object.entries(samples).map(async ([id, { title, template, ...langs }]) => ({
    id,
    title,
    variants: await Promise.all(
      Object.entries(langs).map(async ([lang, { subject, props }]) => ({
        label: lang,
        subject,
        ...(await renderEmail(createElement(template, { lang, brand, ...props }))),
      })),
    ),
  })),
);

rmSync(OUT, { recursive: true, force: true });
for (const file of buildGallery('@inzumer/email · plantillas', emails)) {
  const path = join(OUT, file.path);
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, file.content);
}
console.log(`Gallery: ${OUT}/index.html`);
