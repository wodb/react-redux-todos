const path = require('path')

module.exports = {
	devtool:'cheap-module-eval-source-map',
	entry:path.resolve(__dirname,'src/app.js'),
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:'bundle.js'
	},
	module:{
		loaders:[
			{
				test:/\.jsx?$/,
				exclude:/(node_modules|bower_components)/,
				loader:'babel-loader',
				query:{
					presets:['es2015','react','stage-0','stage-1','stage-2','stage-3']
				}
			}
		]
	}
}