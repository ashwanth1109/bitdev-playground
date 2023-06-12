const {
  tailwindTransformer,
} = require('@learnbit/styling.transformers.tailwind');
const {
  webpackTransformer,
} = require('@ashwanth1109/remote.envs.my-react-env');

/** @type {import("@teambit/react.apps.react-app-types").ReactAppOptions} */
module.exports.default = {
  name: 'my-app',
  entry: [require.resolve('./my-app.app-root')],
  webpackTransformers: [
    webpackTransformer,
    tailwindTransformer({
      config: require.resolve('@ashwanth1109/remote.config.tailwind'),
    }),
  ],
};
