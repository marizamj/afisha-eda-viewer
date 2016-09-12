module.exports = {
	entry: './static/loadPage.js',
  output: {
		path: './static/',
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
