import type { RenderedEmail } from '@/render/render';

export interface GalleryVariant extends RenderedEmail {
  /** Tab name, e.g. `es` or `en`. */
  label: string;
  subject: string;
}

export interface GalleryEmail {
  id: string;
  title: string;
  variants: GalleryVariant[];
}

export interface GalleryFile {
  path: string;
  content: string;
}

const ENTITIES: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' };

const escape = (text: string) => text.replace(/[&<>"]/g, (char) => ENTITIES[char] ?? char);

const STYLE = `body{margin:0;font-family:system-ui,sans-serif;background:#f6f3ef;color:#2f201b}
header{padding:24px 16px;border-bottom:1px solid #e5ddd4;background:#fff}
h1{margin:0;font-size:24px}main{padding:16px;display:grid;gap:32px}
section{background:#fff;border:1px solid #e5ddd4;border-radius:12px;padding:16px}
h2{margin:0 0 4px;font-size:20px}h3{margin:16px 0 4px;font-size:16px}
p{margin:0 0 8px;color:#6b5a52}.frames{display:flex;gap:16px;overflow-x:auto}
figure{margin:0}figcaption{font-size:13px;color:#6b5a52;margin-bottom:4px}
iframe{border:1px solid #e5ddd4;border-radius:8px;height:640px;background:#fff}
nav{display:flex;flex-wrap:wrap;gap:8px}nav a{color:#2f201b}`;

const variantFile = (email: GalleryEmail, variant: GalleryVariant) =>
  `emails/${email.id}-${variant.label}`;

const variantBlock = (email: GalleryEmail, variant: GalleryVariant) => {
  const file = variantFile(email, variant);

  return `<h3>${escape(variant.label)} · ${escape(variant.subject)}</h3>
<div class="frames">
<figure><figcaption>Desktop</figcaption><iframe src="${file}.html" width="640" title="${escape(email.title)} ${escape(variant.label)} desktop"></iframe></figure>
<figure><figcaption>Móvil</figcaption><iframe src="${file}.html" width="375" title="${escape(email.title)} ${escape(variant.label)} mobile"></iframe></figure>
</div>
<nav><a href="${file}.html">HTML</a><a href="${file}.txt">Texto plano</a></nav>`;
};

/** Static gallery of rendered emails: an index with desktop and mobile frames, plus each HTML and text. */
export const buildGallery = (title: string, emails: GalleryEmail[]): GalleryFile[] => {
  const sections = emails
    .map(
      (email) =>
        `<section id="${email.id}"><h2>${escape(email.title)}</h2>${email.variants.map((variant) => variantBlock(email, variant)).join('')}</section>`,
    )
    .join('\n');
  const index = `<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escape(title)}</title><style>${STYLE}</style></head>
<body><header><h1>${escape(title)}</h1><nav>${emails.map((email) => `<a href="#${email.id}">${escape(email.title)}</a>`).join('')}</nav></header><main>${sections}</main></body></html>`;

  return [
    { path: 'index.html', content: index },
    ...emails.flatMap((email) =>
      email.variants.flatMap((variant) => [
        { path: `${variantFile(email, variant)}.html`, content: variant.html },
        { path: `${variantFile(email, variant)}.txt`, content: variant.text },
      ]),
    ),
  ];
};
