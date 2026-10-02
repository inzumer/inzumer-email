import { EmailText } from '@/components';
import { MessageTemplate, type MessageTemplateProps } from './MessageTemplate';

export type ActionTemplateProps = Omit<
  MessageTemplateProps,
  'action' | 'highlight' | 'note' | 'children'
> & {
  action: { href: string; label: string };
  /** e.g. "If the button doesn't work, paste this link in your browser:" */
  fallback: string;
  /** e.g. "The link expires in 30 minutes." */
  expires?: string;
};

/** One action by link (confirm an email, reset a password): button, copyable link and expiry. */
export const ActionTemplate = ({ action, fallback, expires, ...props }: ActionTemplateProps) => (
  <MessageTemplate {...props} action={action} {...(expires && { note: expires })}>
    <EmailText variant="small">
      {fallback} {action.href}
    </EmailText>
  </MessageTemplate>
);
