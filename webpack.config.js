const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.mode === 'production';

module.exports = {
	target: 'web',
	devServer: {
		static: './public/build',
		hot: true,
	},
	devtool: 'inline-source-map',
	entry: path.resolve(__dirname, 'src/main.js'),
	mode: process.env.mode,
	output: {
		clean: true,
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'public/build'),
	},

	module: {
		rules: [
			{
				test: /\.(css)$/,
				use: [{ loader: MiniCssExtractPlugin.loader, options: {} }, 'css-loader' ],
				sideEffects: true,
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			}
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
		// TODO: Add Yandex.Counter (see public/index.html)
		new HtmlWebpackPlugin({
			favicon: './src/assets/decor/favicon.png',
			title: `${!isProduction ? '[ Development ] ' : ''}Bargamut Site`,
			meta: {
				'X-UA-Compatible': {
					'http-equiv': 'X-UA-Compatible',
					'content': "ie=edge",
				},
				description: "Личный сайт Павла 'Bargamut' Петрова",
			},
		}),
	],
};