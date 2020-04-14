import Vue from 'vue'
import App from './App.vue'
import router from './router'
 
import "./assets/css/iconfont.css";
Vue.config.productionTip = false

// 引入的组件
// import {Tabbar,TabbarItem} from 'vant'
// Vue.use(Tabbar).use(TabbarItem)
import {Tabbar,TabbarItem,NavBar,Icon,Grid,GridItem,Image,Field,Cell,CellGroup} from 'vant'
import 'vant/lib/index.css';
import 'vant/lib/icon/local.css';
Vue.use(Tabbar).use(TabbarItem).use(NavBar).use(Icon).use(Grid).use(GridItem).use(Image).use(Field).use(Cell).use(CellGroup);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
