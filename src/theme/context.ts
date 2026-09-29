import { createContext, useContext } from 'react';
import { defaultEmailTheme, type EmailTheme } from './theme';

export const EmailThemeContext = createContext<EmailTheme>(defaultEmailTheme);

/** The theme of the enclosing `EmailLayout`. */
export const useEmailTheme = (): EmailTheme => useContext(EmailThemeContext);
