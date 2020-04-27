import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../video.js';// 引入视频播放插件

// import VideoPlayer from 'vue-video-player'
// import 'vue-video-player/src/custom-theme.css'
// import 'video.js/dist/video-js.css'

// import Video from 'main.js'
// import zhCN from '../video-zh-CN.json';
//
// import 'videojs-flash';
// const SWF_URL=require('videojs-swf/dist/video-js.swf');
//
// Video.options.flash.swf = SWF_URL; // 设置flash路径，Video.js会在不支持html5的浏览中使用flash播放视频文件
// Video.addLanguage('zh-CN', zhCN);// 添加中文支持
// Vue.config.productionTip = false;

Vue.use(ElementUI);

// Vue.use(VideoPlayer);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app');
