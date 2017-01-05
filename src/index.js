import 'admin-lte/bootstrap/js/bootstrap'
import 'admin-lte/dist/js/app'
import Vue from 'vue'
import router from './routers'
import App from './App'

require('admin-lte/dist/css/AdminLTE.css')
require('admin-lte/dist/css/skins/skin-blue.min.css')

// for side menu
new Vue({
  el: '#menu_main',
  data: {
    menus: [
      { title: 'MENU', vclass: 'header' },
      { title: 'Home', url: '/admin/home' },
      { title: 'Bar',
        url: '/admin/bar',
        vclass: 'treeview',
        submenus: [
          { title: 'Baz', url: '/admin/baz' },
          { title: 'Bar2', url: '/admin/bar2' }
        ]
      }
    ]
  }
}).$mount('#menu_main')

// for router
new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')

window.router = router
// menus demo data!!!
/*    menus: [
      { title: 'MENU', vclass: 'header' },
      { title: 'Foo', url: '/foo' },
      { title: 'Bar',
        url: '/bar',
        vclass: 'treeview',
        submenus: [
          { title: 'Bar1', url: '/bar1' },
          { title: 'Bar2', url: '/bar2' }
        ]
      }
    ]
*/

