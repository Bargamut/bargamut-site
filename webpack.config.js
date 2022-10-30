const path = require('path');
// const preprocess = require('svelte-preprocess');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const prod = process.env.mode ?? 'production';

module.exports = {
	entry: path.resolve(__dirname, 'src/main.js'),
	output: {
		path: path.resolve(__dirname, 'public/build'),
	},

	// See for below: https://codechips.me/svelte-and-webpack-5/
	resolve: {
		alias: {
			svelte: path.dirname(require.resolve('svelte/package.json')),
		},
		extensions: ['.mjs', '.js', '.svelte', '.ts'],
		mainFields: ['svelte', 'browse', 'module', 'main'],
	},
	module: {
		rules: [
			{
				test: /\.svelte$/,
				use: {
					loader: 'svelte-loader',
					options: {
						compilerOptions: {
							dev: !prod,
						},
						emitCss: prod,
						hotReload: !prod,
						// preprocess: preprocess({
						// 	postcss: true,
						// }),
					},
				},
			},
			{
				test: /node_modules\/svelte\/.*\.mjs$/,
				resolve: {
					fullySpecified: false,
				},
			},
			{
				test: /\.(p?css)$/,
				use: [{ loader: MiniCssExtractPlugin.loader, options: {} }, 'css-loader',
					// 'postcss-loader'
				],
				sideEffects: true,
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],
};