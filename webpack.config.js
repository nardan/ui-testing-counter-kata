const path = require('path');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

function base(env, argv) {
	const isDevMode = argv.mode !== 'production';

	return {
		// resolve: {
		// 	extensions: ['.js', '.jsx', '.json', '.css', '.scss']
		// },
		devtool: isDevMode ? 'eval-source-map' : 'hidden-source-map',
		module: {
			rules: [
				{
					test: /\.css$/,
					use: [
						{ loader: 'style-loader', options: { sourceMap: true } },
						{
							loader: 'css-loader',
							options: {
								sourceMap: true
							}
						}
					]
				},
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: 'babel-loader'
				}
			]
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebPackPlugin({
				filename: './index.html'
			})
		],
		devServer: {
			contentBase: path.join(__dirname, 'dist'),
			historyApiFallback: true
		}
	};
}

module.exports = base;
