import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {path:'/',
  name:"environmentMonitor",
  component:()=>import("../views/environmentMonitor")
  },
  {path:'/weatherstation',
  name:"weatherStation",
  component:()=>import("../views/weatherStation")
  },
  {path:'/message',
  name:"Message",
  component:()=>import("../views/Message")
  },
  {path:'/resume',
  name:"Resume",
  component:()=>import("../views/Resume")
  },
  
];

const router = new VueRouter({
  mode : "history",
  routes
})

export default router
