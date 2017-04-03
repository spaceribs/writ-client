const path = require('path');

module.exports = {
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],

    loaders: [
      {
        test: /.json$/,
        loaders: [
          'json'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate',
          'babel'
        ]
      },
      {
        test: /.html$/,
        loaders: [
          'html'
        ]
      },
      {
        test: /\.(png|woff|woff2|ttf|svg)$/,
        loader: 'url?limit=100000'
      },
      {
        test: /.glsl$/,
        loaders: [
          'raw'
        ]
      },
      {
        test: /node_modules\/pixi\.js/,
        loader: 'ify'
      }
    ]
  },
  plugins: [],
  devtool: 'source-map'
};
