const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const DEV = process.argv.includes('--dev');

module.exports = {
  mode: DEV ? 'development' : 'production',

  entry: {
    app: [
      '@babel/polyfill',
      path.resolve(__dirname, './src/index.jsx'),
    ],
  },

  output: {
    path: path.resolve(__dirname, 'public'),
    filename: DEV ? '[name].js' : '[name].[hash].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),

        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
            ],
            plugins: [
              'react-hot-loader/babel',
            ],
          },
        },
      },

      {
        test: /\.scss/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: DEV,
            },
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2|ico|jpg|jpeg|png|webp|svg|gif)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
  },

  devServer: {
    index: 'index.html',
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    open: true,
    hot: true,
    stats: 'minimal',
  },

  optimization: {
    moduleIds: DEV ? 'named' : 'hashed',
    usedExports: true,
    noEmitOnErrors: DEV,
    concatenateModules: true,
    minimize: !DEV,
    minimizer: [new TerserPlugin()],
  },

  performance: {
    hints: DEV ? false : 'warning',
    maxAssetSize: 1512000,
    maxEntrypointSize: 1512000,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: DEV ? '[name].css' : '[name].[hash].css',
      chunkFilename: DEV ? '[id].css' : '[id].[hash].css',
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      minify: {
        removeComments: !DEV,
        collapseWhitespace: !DEV,
      },
      cache: false,
    }),
  ],

  devtool: DEV ? 'cheap-module-source-map' : false,
};
