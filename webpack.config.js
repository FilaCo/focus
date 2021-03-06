const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src'),

  output: {
    filename: 'focus.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'Focus',
      type: 'umd',
    },
  },

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },

  module: {
    rules: [{ test: /\.(ts|js)x?$/, loader: 'babel-loader', exclude: /node_modules/ }],
  },

  plugins: [new ForkTsCheckerWebpackPlugin()],
}
