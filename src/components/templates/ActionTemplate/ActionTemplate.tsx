import { EmailText } from '@/components/atoms';
import { MessageTemplate, type MessageTemplateProps } from '../MessageTemplate';

export type ActionTemplateProps = Omit<
  MessageTemplateProps,
  'action' | 'highlight' | 'note' | 'children'
> & {
  action: { href: string; label: string };
  fallback: string;
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
