const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  // entry for the application
  entry: path.resolve(__dirname, '..', './src/index.tsx'),
  //   allows us to leave file extension when importing
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
      {
        // css loader
        test: /\.css$/i,

        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        // file loader
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        // include: path.resolve(__dirname, '..', './public'),
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, '..', './build'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
    clean: true,
  },

  // injects bundle.js file
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', './src/index.html'),
    }),
    // allows to copy static assets to the build directory
    // new CopyPlugin({
    //   patterns: [{ from: 'source', to: 'dest' }],
    // }),
  ],
  stats: 'errors-only',
}
