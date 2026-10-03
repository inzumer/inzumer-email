import { SOCIAL_NETWORKS, socialIconUrl, type SocialNetwork } from '@/social';
import { useEmailTheme } from '@/theme';
import { Img, Link, Text } from '@react-email/components';

export interface EmailSocialLink {
  network: SocialNetwork;
  href: string;
  /** A brand's own PNG; the default gray icon otherwise. */
  iconUrl?: string;
}

export interface EmailSocialLinksProps {
  links: EmailSocialLink[];
}

/** A centered row of network icons, each linking to the profile. */
export const EmailSocialLinks = ({ links }: EmailSocialLinksProps) => {
  const theme = useEmailTheme();

  return (
    <Text style={{ margin: '8px 0', textAlign: 'center', lineHeight: 1 }}>
      {links.map(({ network, href, iconUrl }) => (
        <Link
          key={network}
          href={href}
          style={{ display: 'inline-block', margin: '0 6px', color: theme.colors.textSecondary }}
        >
          <Img
            src={iconUrl ?? socialIconUrl(network)}
            alt={SOCIAL_NETWORKS[network]}
            width="24"
            height="24"
            style={{ display: 'block', border: 0 }}
          />
        </Link>
      ))}
    </Text>
  );
};
