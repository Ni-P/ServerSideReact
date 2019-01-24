const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // inform webpack we are building a bundle for nodeJS
  target: 'node',

  // tell webpack the root file
  entry: './src/index.js',

  // where to put the generated file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    library: 'server',
    libraryTarget: 'commonjs2'
  },

  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
