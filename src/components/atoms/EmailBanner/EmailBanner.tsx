import { useEmailTheme } from '@/theme';
import { Img, Link } from '@react-email/components';

export interface EmailBannerProps {
  /** Absolute URL: email clients can't load relative paths. */
  src: string;
  alt: string;
  /** Makes the whole banner a link. */
  href?: string;
}

/** A full-width image (a cover, a promo) with the theme radius, optionally linked. */
export const EmailBanner = ({ src, alt, href }: EmailBannerProps) => {
  const theme = useEmailTheme();
  const image = (
    <Img
      src={src}
      alt={alt}
      width="100%"
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        margin: '0 0 16px',
        borderRadius: theme.radius,
      }}
    />
  );

  return href ? <Link href={href}>{image}</Link> : image;
};
