var path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    filename: 'js/[hash].bundle.js',
    path: BUILD_DIR
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: APP_DIR,
        loader: 'babel-loader'
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.scss?/,
        loader: 'style-loader!css-loader!sass-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    new webpack.optimize.DedupePlugin(),
    new HtmlWebpackPlugin({
      favicon: 'public/favicon.ico',
      filename: `index.html`,
      template: 'src/index.template.html',
      title: 'Watson Workspace - Diagnostics',
      inject: 'body'
  })
  ],
  resolve: {
    alias: {
      _app: path.resolve(__dirname, 'src/client/app'),
      _comms: path.resolve(__dirname, 'src/client/app/comms'),
      _components: path.resolve(__dirname, 'src/client/app/components'),
      _containers: path.resolve(__dirname, 'src/client/app/containers'),
      _data: path.resolve(__dirname, 'src/client/app/data'),
      _sass: path.resolve(__dirname, 'src/client/sass')
    }
  }
};

console.log('*** BUILD WEBPACK')

module.exports = config;