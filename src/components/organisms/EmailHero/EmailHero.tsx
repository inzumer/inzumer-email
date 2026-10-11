import { textStyle, useEmailTheme } from '@/theme';
import { Heading, Img, Section, Text } from '@react-email/components';

export interface EmailHeroProps {
  title: string;
  subtitle?: string;
  /** Logo on top (absolute URL), in the same block as the title. */
  logo?: { src: string; alt: string };
  /** Solid background; also the fallback behind `image` (Outlook doesn't show background images). */
  background?: string;
  /** A full background image with the texts over it. */
  image?: string;
  /** Color of the title and subtitle; the primary text color by default. */
  textColor?: string;
  /** How much the image is darkened so the texts read (0 to 1, 0.45 by default). */
  overlay?: number;
}

/** Header of the email: logo, title and subtitle on a solid color or over an image, in the heading font. */
export const EmailHero = ({
  title,
  subtitle,
  logo,
  background,
  image,
  textColor,
  overlay = 0.45,
}: EmailHeroProps) => {
  const theme = useEmailTheme();
  const color = textColor ?? theme.colors.primaryText;

  return (
    <Section
      style={{
        margin: '0 0 16px',
        padding: image ? '72px 28px' : '36px 28px',
        borderRadius: theme.radius,
        textAlign: 'center',
        backgroundColor: background ?? theme.colors.primary,
        ...(image && {
          backgroundImage: `linear-gradient(rgba(0, 0, 0, ${overlay}), rgba(0, 0, 0, ${overlay})), url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }),
      }}
    >
      {logo && (
        <Img
          src={logo.src}
          alt={logo.alt}
          width="64"
          height="64"
          style={{ margin: '0 auto 16px', borderRadius: '50%', border: 0 }}
        />
      )}
      <Heading
        as="h1"
        style={{
          margin: 0,
          fontFamily: theme.fonts.heading,
          fontSize: '30px',
          lineHeight: 1.2,
          color,
          ...textStyle(theme.headings),
        }}
      >
        {title}
      </Heading>
      {subtitle && (
        <Text style={{ margin: '12px 0 0', fontSize: '17px', lineHeight: 1.5, color }}>
          {subtitle}
        </Text>
      )}
    </Section>
  );
};
