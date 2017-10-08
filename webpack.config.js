module.exports = {
  entry: __dirname + '/src/index.js',
  output: {filename: 'public/bundle.js'},
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react', 'stage-0'],
            plugins: ['css-modules-transform']
          }
        }
      }
    ]
  }
}
