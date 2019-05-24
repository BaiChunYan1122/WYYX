import Home from '../pages/Home/Home.vue'
import Categroy from '../pages/Categroy/Categroy.vue'
import Things from '../pages/Things/Things.vue'
import Shopcar from '../pages/Shopcar/Shopcar.vue'
import Personal from '../pages/Personal/Personal.vue'

export default [
  {
    path:"/home",
    component:Home
  },
  {
    path:'/categroy',
    component:Categroy
  },
  {
    path:'/things',
    component:Things
  },
  {
    path:'/shopcar',
    component:Shopcar
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path: '',
    redirect: '/home'
  }
]
