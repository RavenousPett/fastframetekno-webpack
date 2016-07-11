module.exports = {
  entry: './assets/js/main.js',
  output: {
    path: 'assets/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}
