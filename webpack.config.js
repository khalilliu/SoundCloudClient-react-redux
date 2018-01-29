const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: [
		'react-hot-loader/patch',
		'./src/index.js',
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: './dist',
		hot: true,
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['react','env'],
						},
					},
				],
			},
		],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
	],
};
