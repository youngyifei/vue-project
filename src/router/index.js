import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/view/Home'
import Test from '@/view/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Hello
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
