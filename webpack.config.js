
const autoPrefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

const layoutLoaders = [
  'style-loader',
  'css-loader',
  {
    loader: 'postcss-loader',
    options: {
      plugins: [
        autoPrefixer({
          browsers: 'last 3 versions'
        })
      ]
    }
  }
];

var config = {
  bail: true,
  entry: APP_DIR + '/index.js',
  output: {
    filename: 'js/[hash].bundle.js',
    path: BUILD_DIR
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        loader: 'babel-loader',
        include: APP_DIR
      }, {
        test: /\.json$/,
        loader: 'json-loader'
      }, {
        test: /\.css$/,
        use: layoutLoaders
      },
      {
        test: /\.s?css$/,
        use: layoutLoaders.concat(['sass-loader'])
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin({ uglifyOptions: { compress: { warnings: false, comparisons: false } } }),
    new HtmlWebpackPlugin({
      favicon: 'dist/favicon.ico',
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

console.log('*** BUILD WEBPACK ***');

module.exports = config;