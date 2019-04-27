/* JSAdmin
 *  lists
 */

function Lists(){
	return this;
}


Lists.prototype = {

	get:function (list,options,vue){
		var that = this
		$.ajax({url:"/keystone/api/"+list+"?fields="+options + "&limit=100",
				dataType: "json",
            	success: function(data){
					//vue.$data.lists.push(m)

					data["results"].forEach(function(l){
						l["fields"]["id"] = l["id"]
						vue.$data.lists.push(l["fields"])

					})

					vue.$data.data = true
				},
				error : function() {
    			},
		});

		$.ajax({url:"/admin/api/listcolumns/"+list,
				dataType: "json",
				success: function(data){
					data['defaultColumns'].unshift({"label":"Id",path:"id"})
					vue.$data.header = data['defaultColumns']
					vue.$data.column = true

				},
				error : function() {
				},
		});

	},

}
