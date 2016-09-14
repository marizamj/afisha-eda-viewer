module.exports = {
	entry: './static/src/index.js',
  output: {
		path: './static/dist',
	  filename: 'bundle.js'
	},
	module: {
	  loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
	  }]
  }
};
