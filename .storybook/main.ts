import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: ['../docs/**/*.mdx', '../src/**/*.stories.tsx'],
  addons: [
    // GFM, so the tables of the docs pages render as tables.
    {
      name: '@storybook/addon-docs',
      options: { mdxPluginOptions: { mdxCompileOptions: { remarkPlugins: [remarkGfm] } } },
    },
    '@storybook/addon-a11y',
  ],
  // Default network icons, published with Storybook (see SOCIAL_ICONS_URL).
  staticDirs: ['./public'],
  framework: { name: '@storybook/react-vite', options: {} },
  viteFinal: (config) => ({ ...config, plugins: [...(config.plugins ?? []), tsconfigPaths()] }),
};

export default config;
