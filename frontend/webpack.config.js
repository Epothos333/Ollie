var path = require('path');

var BUILD_DIR = path.resolve(__dirname, '../backend/pets/static/javascript');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
	entry: APP_DIR + '/components/index.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?/,
			include: APP_DIR,
			loader: 'babel-loader'
		}, {
			test: /\.(scss|css)$/,
			loaders: ['style-loader', 'css-loader', 'sass-loader']
		}]
	}
};

module.exports = config;
