/* JSAdmin
 *  forms
 */

function Forms(){
	return this;
}


//opts is keystone fields

function input(opts){
	
	return formCreate.maker.input(opts['label'],opts['path']).col({span: 12})
}

function formswitch(opts){

	return formCreate.maker.switch(opts['label'],opts['path'],"0")
}


function password(opts){

	return formCreate.maker.password(opts['label'],opts['path']).col({span:8})
}

function email(opts){

	return formCreate.maker.input(opts['label'],opts['path']).col({span: 10})

}

function url(opts){
	
	return formCreate.maker.url(opts['label'],opts['path']).col({span: 12})
}

function number(opts){
	
	return formCreate.maker.number(opts['label'],opts['path']).col({span: 6})
}

function color(opts){
	
	return formCreate.maker.color(opts['label'],opts['path'],'#F12345')
}

function select(opts){
	
	return formCreate.maker.select(opts['label'],opts['path']).options(opts['ops']).props({
        multiple:true
	}).col({span:6})
}
function date(opts){
	
	return formCreate.maker.date(opts['label'],opts['path'],[new Date()]).props({
        "type": "date",
	})
}
function datetime(opts){
	
	return formCreate.maker.date(opts['label'],opts['path'],[new Date()]).props({
        "type": "datetime",
	})
}
function file(opts){
	
	return formCreate.maker.upload(opts['label'],opts['path']).col({span: 6}).props({
            "action": "",
            "maxLength": 4,
            "multiple": true,
            "type": "select",
            "uploadType": "image",
            "name": "file",
            "onSuccess": function () {
                return '/logo.jpg';
            },
        })
}
function textarea(opts){
	
	return formCreate.maker.input(opts['label'],opts['path']).col({span: 12}).props({
        "type": "textarea",
        "rows":5
      }).col({span:16})
}

function html(opts){
	
	return formCreate.maker.input(opts['label'],opts['path']).col({span: 12}).props({
        "type": "textarea",
        "rows":5,
      }).col({span:16}).className("tinyMCE").emit('change')

}
var CreateTable={
	"email":email,
	"boolean":formswitch,
	"password":password,
	"url":url,
	"number":number,
	"textarea":textarea,
	"file":file,
	"color":color,
	"date":date,
	"datetime":datetime,
	"html":html,
	"select":select,
}

function getMaker(field){
	
	maker = CreateTable[field.type]

	if (!maker){
		return input(field)
	}
	
	return maker(field)

}

function getFieldByEl(vue,id,content){

	vue.$data.rule.forEach(function(f){
		if (f.props.elementId === id){
			f.value = content
		}
	})

}

Forms.prototype = {

	set:function (list,vue){
		var that = this
		$.ajax({url:"/admin/api/form/" + list,
				dataType: "json",
            	success: function(data){
					var fields = data["keystone"]["list"]["fields"];
					var rule = []	;				

				
					Object.keys(fields).forEach(function(k){
						
						rule.push(getMaker(fields[k]))
					})
					

					vue.$data.rule = rule
					vue.$nextTick(function(){
									tinymce.init({selector:'.tinyMCE textarea',    
											setup: function (editor) {
												editor.on(
              										'input change undo redo', () => {
              											editor.save() 
														getFieldByEl(vue,this.id,editor.getContent())
													})
        										}
    									})//init
								})
				},
				error : function() {
    			},
		});


	},

}
