import type { Preview } from '@storybook/react-vite';
import { theme } from './theme';

const preview: Preview = {
  parameters: {
    docs: { theme },
    layout: 'fullscreen',
    // Documentation first: it's what opens at the root of the published Storybook.
    options: {
      storySort: {
        order: [
          'Documentation',
          ['Introduction', 'Usage'],
          'Atoms',
          'Molecules',
          'Organisms',
          'Templates',
        ],
      },
    },
  },
};

export default preview;
