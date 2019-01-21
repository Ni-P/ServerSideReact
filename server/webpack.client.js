const path = require('path');

module.exports = {
  // tell webpack the root file
  entry: './src/client/client.js',

  // where to put the generated file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
    // library: 'server',
    // libraryTarget: 'commonjs2'
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