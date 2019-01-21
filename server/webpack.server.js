const path = require('path');

module.exports = {
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

  // run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
};
