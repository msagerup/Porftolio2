var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const DashBoard = require('webpack-dashboard/plugin');

var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry: './src/js/script.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/dist'
	},
	watch: true,
	plugins: [
	    new BrowserSyncPlugin({
	      // browse to http://localhost:3000/ during development, 
	      // ./public directory is being served 
	      host: 'localhost',
	      port: 3000,
	      files: ['*.html', './src/css/*.css'],
	      server: { baseDir: ['.'] }
    	}),
    	new DashBoard()
  	]

};