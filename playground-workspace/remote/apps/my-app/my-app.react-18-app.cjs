const {
  tailwindTransformer,
} = require('@learnbit/styling.transformers.tailwind');

/** @type {import("@teambit/react.apps.react-app-types").ReactAppOptions} */
module.exports.default = {
  name: 'my-app',
  entry: [require.resolve('./my-app.app-root')],
  webpackTransformers: [
    tailwindTransformer({
      config: require.resolve('@ashwanth1109/remote.config.tailwind'),
    }),
  ],
};
