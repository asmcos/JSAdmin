import Vue from 'vue'
import VueRouter from 'vue-router/dist/vue-router'

import Home from './views/Home.vue'
import Simple from './views/Simple.vue'
import TestAudio from './views/TestAudio.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: '/', component: Home },
    { path: '/TestAudio', name: '/TestAudio', component: TestAudio },
    { path: '/Simple', name: '/Simple', component: Simple }
  ]
})

export default router
