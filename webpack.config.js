const currentMode = process.env.npm_lifecycle_event;
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');

postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('postcss-hexrgba'),
  require('autoprefixer')
]

let cssConfig = {
  test: /\.css$/i,
  use: ['css-loader?url=false', {
    loader: 'postcss-loader', 
    options: {
      plugins: postCSSPlugins
    }
  }],
}

let config = {
  entry: './app/assets/scripts/App.js',
  plugins: [new HTMLWebpackPlugin({filename: 'index.html', template: './app/index.html'})],
  module: {
    rules: [
      cssConfig
    ]
  }
}

if (currentMode == 'dev') {
  cssConfig.use.unshift('style-loader')
  config.output = {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  config.devServer = {
    before: (app, server) => {
      server._watch('./app/**/*.html')
    }, 
    contentBase: path.join(__dirname, "app"),
    hot: true,
    port: 3000,
    host: '0.0.0.0'
  },
  config.mode = 'development'
}


if (currentMode == 'build') {
  cssConfig.use.unshift(MiniCSSExtractPlugin.loader);
  postCSSPlugins.push(require('cssnano'));

  config.output = {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  config.mode = 'production',
  config.optimization = {
    splitChunks: {chunks: 'all'}
  },
  config.plugins.push(new CleanWebpackPlugin(), new MiniCSSExtractPlugin({filename: 'styles.[chunkhash].css'}))
}

module.exports = config;