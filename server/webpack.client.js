const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
  // tell webpack the root file
  entry: './src/client/client.js',

  // where to put the generated file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
    // library: 'server',
    // libraryTarget: 'commonjs2'
  }
};

module.exports = merge(baseConfig, config);
