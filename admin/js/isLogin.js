/* JSAdmin
 * isLogin 
 */

function isLogin(){
	return this;
}

isLogin.prototype = {

	getLoginInfo:function (){
		$.ajax({url:"/keystone/api/counts",
				dataType: "json",
            	success: function(data){
				},
				error : function() {
        		 	var pathname = window.location.pathname
					window.location.href= "/keystone/signin?from=" + pathname 
    			},
		});
 		
	}
}
