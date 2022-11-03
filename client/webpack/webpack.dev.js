// specific to development enviroment
const webpack = require('webpack')
// hot model replacement for updating only modified components
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  devServer: {
    port: '3000',
    // static: {
    // 	directory: path.join(__dirname, 'public'),
    // },
    hot: true,
    open: true,
  },
  plugins: [
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Justas'),
    }),
  ],
}
