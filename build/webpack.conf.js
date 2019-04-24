var path = require('path')
var projectRoot = path.resolve(__dirname, '../')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry:path.resolve(__dirname, './') + '/webpack_entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'), // This is where images AND js will go
	filename: 'js/[name].[chunkhash:8].js',
  },
  plugins: [
        new CopyPlugin([
			 // Copy directory contents to {output}/to/directory/
            { from: './node_modules/admin-lte/dist',to: '../../public'},
            { from: './node_modules/bootstrap/dist',to: '../../public'},
				
		], {
            ignore: [
                // Doesn't copy any files with a txt extension    
                '*.txt',
            ],

            // By default, we only copy modified files during
            // a watch or webpack-dev-server build. Setting this
            // to `true` copies all files.
            copyUnmodified: true
        }) //CopyWebpackPlugin
	] //plugins
};
