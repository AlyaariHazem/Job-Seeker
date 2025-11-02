const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'jobSeeker',
  filename: 'remoteEntry.js',

  exposes: {
    './Component': './src/app/app.component.ts',
    './HomeModule':'./src/app/pages/home/home.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
