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
          [
            'Introduction',
            'Installation',
            'Usage',
            'Tech Stack',
            'Components',
            'Theming',
            'Accessibility',
            'Testing And Coverage',
          ],
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
