import type { WebpackConfigMutator } from '@teambit/webpack';

/**
 * modifies the webpack config for the components preview bundle.
 * @see https://bit.dev/reference/webpack/webpack-config
 */
export const webpackTransformer = (
  configMutator: WebpackConfigMutator
): WebpackConfigMutator => {
  const newWebpackConfig = {
    output: {
      publicPath: '/',
    },
    devServer: {
      historyApiFallback: true,
    },
  };
  configMutator.merge([newWebpackConfig]);
  return configMutator;
};
