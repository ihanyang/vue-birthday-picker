var path = require("path")
import precss from "precss"
import autoprefixer from "autoprefixer"

export default {
	entry: "./demo/app.js",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "build.js",
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: "vue"
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel"
			},
			{
				test: /\.css$/,
				loader: "style!css!postcss"
			},
			{
				test: /\.(png|jpg|gif|ttf|svg|ico)$/,
				loader: "url-loader",
				query: {
					name: "[hash].[ext]",
					limit: 10000,
				}
			}
		]
	},
	vue: {
		loaders: {
			css: "style!css!postcss"
		}
	},
	postcss: [
		precss,
		autoprefixer({
			browsers: "> 5%"
		})
	],
	resolve: {
		extensions: ["", ".js", ".vue"]
	},
	devtool: "eval-source-map"
}