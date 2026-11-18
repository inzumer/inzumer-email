import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  stories: ['../docs/**/*.mdx', '../src/**/*.stories.tsx'],
  addons: [
    {
      name: '@storybook/addon-docs',
      options: { mdxPluginOptions: { mdxCompileOptions: { remarkPlugins: [remarkGfm] } } },
    },
    '@storybook/addon-a11y',
  ],
  staticDirs: ['./public'],
  framework: { name: '@storybook/react-vite', options: {} },
  viteFinal: (config) => ({ ...config, plugins: [...(config.plugins ?? []), tsconfigPaths()] }),
};

export default config;
