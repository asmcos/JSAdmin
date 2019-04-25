/* JSAdmin
 * GetDb 
 */

function DbMenu(){
	return this;
}

//menu data format
/*
     data: {
       menus: [
        { title: 'MENU', vclass: 'header' },
        { title: 'Home', url: '/admin/home' },
        { title: 'Bar',
         url: '/admin/bar',
         vclass: 'treeview',
         submenus: [
          { title: 'Bar1', url: '/admin/bar1' },
          { title: 'Bar2', url: '/admin/bar2' }
         ]
        }
      ]
    }
*/

DbMenu.prototype = {

	getDBInfo:function (vue){
		var that = this
		$.ajax({url:"/admin/api/lists",
				dataType: "json",
            	success: function(data){
					var keys = Object.keys(data);
					keys.forEach(function(k){
						var m = {title : k,url:"/keystone/api/"+data[k].path,count:data[k].count}
						
						vue.$data.menus.push(m)
					})										
				},
				error : function() {
        		 	var pathname = window.location.pathname
					window.location.href= "/keystone/signin?from=" + pathname 
    			},
		});
 		
	},
	
}


