/* JSAdmin
 *  forms
 */

function Forms(){
	return this;
}


//opts is keystone fields

function input(opts){
	
	return formCreate.maker.input(opts['label'],opts['path'])
}

function formswitch(opts){

	return formCreate.maker.switch(opts['label'],opts['path'],"0")
}


function password(opts){

	return formCreate.maker.password(opts['label'],opts['path'])
}


var CreateTable={
	"email":input,
	"boolean":formswitch,
	"password":password,
}

function getMaker(field){
	
	maker = CreateTable[field.type]

	if (!maker){
		return input(field)
	}
	
	return maker(field)

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
				},
				error : function() {
    			},
		});


	},

}
