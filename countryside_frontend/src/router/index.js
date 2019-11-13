import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const Forum = () => import('../views/forum/Forum');
const Policy = () => import('../views/policy/Policy');
const Product = () => import('../views/product/Product');
const Mall = () => import('../views/mall/Mall');
const Guide = () => import('../views/guide/Guide');

// 1.安装插件
Vue.use(VueRouter);

// 2.创建路由对象

// 配置路由和组件之间的映射关系
const routes = [
  {
    path: '',
    redirect: './home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/forum',
    component: Forum,
    meta: {
      title: '大学生论坛'
    }
  },
  {
    path: '/policy',
    component: Policy,
    meta: {
      title: '政策通晓'
    }
  },
  {
    path: '/product',
    component: Product,
    meta: {
      title: '产品服务'
    }
  },
  {
    path: '/mall',
    component: Mall,
    meta: {
      title: '网上商城'
    }
  },
  {
    path: '/guide',
    component: Guide,
    meta: {
      title: '乡村微导游'
    }
  },
];

const router = new VueRouter({
  routes,
  mode: 'hash'
});

//全局导航守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
});

// 3.将router对象传入到Vue实例
export default router