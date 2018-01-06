var webpack = require('webpack');
var path = require('path');
var version = "v2.0.1";

module.exports = {
	entry: "./main/main.js",
	output: {
		path: path.resolve(__dirname, './main'),
		filename: 'sofiagents.min.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules(?!\/webpack-dev-server)/
			},
			{
				test: /\.html$/,
				loader: 'html-loader'
			},
			// {
			// 	test: /\.(png|jpg|gif|svg)$/,
			// 	use: [
      //     {
      //       loader: 'file-loader',
      //       options: {}
      //     }
      //   ]
			// }
		]
	},
  plugins: [
    new webpack.DefinePlugin({
    	'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false}),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
}
