import type { StorybookConfig } from '@storybook/react-vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: ['../docs/**/*.mdx', '../src/**/*.stories.tsx'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  // Default network icons, published with Storybook (see SOCIAL_ICONS_URL).
  staticDirs: ['./public'],
  framework: { name: '@storybook/react-vite', options: {} },
  viteFinal: (config) => ({ ...config, plugins: [...(config.plugins ?? []), tsconfigPaths()] }),
};

export default config;
