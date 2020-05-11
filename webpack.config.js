const path = require('path')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    usedExports: true
  },
  externals: {
    react: 'react'
  }
}
