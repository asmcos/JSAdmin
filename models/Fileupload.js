/*
 * The is an example of  most keystone fields .
 *
 */

var keystone = require('keystone');
var Types = keystone.Field.Types;

var Fileupload = new keystone.List('Fileupload',{
	defaultSort: '-id'
	});


var storage = new keystone.Storage({
    adapter: keystone.Storage.Adapters.FS,
    fs: {
        path: 'public/uploads',
        publicPath: '/static/uploads/',
		generateFilename: (file) => {
			const ext = file.originalname.substr(file.originalname.lastIndexOf('.') + 1);
			return `${file.filename}.${ext}`;
		}
    }
});


Fileupload.add({
  uploadfile: { type: Types.File, storage: storage },
  dateTime:{ type: Types.Datetime, default: Date.now } ,
});

Fileupload.defaultColumns = 'uploadfile';
Fileupload.register();


