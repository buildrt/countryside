<template xmlns:src="http://www.w3.org/1999/xhtml" xmlns:width="http://www.w3.org/1999/xhtml">
  <div id="yanhuGuide">
    <guide-bar>
      <img name="titleBac" slot="titleBac" src="../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/title.png"/>
      <img name="titleName" slot="titleName" src="../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/yanhuVillage.png" alt="">
      <img name="cateringImg1" slot="cateringImg1" src="../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/catering1.jpg"/>
      <p slot="cateringName1">常来渔家</p>
      <img name="cateringImg2" slot="cateringImg2" src="../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/catering2.jpg"/>
      <p slot="cateringName2">河畔杨家</p>
      <img name="cateringImg3" slot="cateringImg3" src="../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/catering3.jpg"/>
      <p slot="cateringName3">小马哥渔家乐</p>
      <img name="cateringImg4" slot="cateringImg4" src="../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/catering4.jpg"/>
      <p slot="cateringName4">知棠园</p>
      <!--<el-carousel :interval="4000" type="card" slot="travelImg">-->
        <!--<el-carousel-item v-for="item in travelImg" :key="item">-->
          <!--<el-image :src="item.img"></el-image>-->
        <!--</el-carousel-item>-->
      <!--</el-carousel>-->
      <el-carousel :interval="4000" type="card" slot="trafficImg" height="350px">
        <el-carousel-item v-for="item in trafficImg" :key="item">
          <el-image :src="item.img"></el-image>
        </el-carousel-item>
      </el-carousel>
      <p slot="tIntroContentTitle">渔家书房</p>
      <p slot="tIntroContent">“渔家书房”，除了提供阅读场地外还集美食、渔技等特色渔家文化于一体。不仅可看书，还能学做渔家饭。乡村书房布点选址充分考虑渔家文化传承、交通便利性、服务半径、阅读需求等因素，第一阶段重点选址布局在乡村文明示范线和田园文明示范线，方便群众就近阅读。
        为给渔民提供精神食粮，给游客提供休憩场所，“网红渔村”沿湖村投资建设了“渔家书房”。面积约200平方米，藏书近5000册，主要包括水产养殖捕捞、美食烹饪、旅游休闲度假等内容。
        “我们在里面增加了渔家的内容。”沿湖村党总支书记刘德宝介绍说，“渔家书房”在装饰上最大程度地保留了渔家特色，有渔船、渔网等展现渔家文化技艺的物件，还可提供渔家美食，供游客品尝。</p>
      <img slot="hotelImg1" src="../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/hotel/hotelImg1.png" alt="">
      <p slot="hotelIntro1">船的家民宿</p>
      <p slot="hotelLocal1">沿湖村</p>
      <img slot="hotelImg2" src="../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/hotel/hotelImg2.png" alt="">
      <p slot="hotelIntro2">桥口钱家</p>
      <p slot="hotelLocal2">沿湖村</p>
      <img slot="hotelImg3" src="../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/hotel/hotelImg3.png" alt="">
      <p slot="hotelIntro3">湖光十色民宿</p>
      <p slot="hotelLocal3">沿湖村</p>
    </guide-bar>

    <div id="flashDiv">
      <video-player
        class="vjs-custom-skin video-player"
        :options="playerOptions"
        ref="videoPlayer"
        :playsinline="true"
      ></video-player>
    </div>
  </div>
</template>

<script>
  import GuideBar from "../../../../../components/content/guide/GuideBar";
  import s1 from "../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/studies/s1.png"
  import s2 from "../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/studies/s2.png"
  import s3 from "../../../../../assets/img/guide/jiangsu/yangzhou/yanhuVillage/studies/s3.png"
  import {videoPlayer} from 'vue-video-player';

  export default {
    name: "YanhuGuide",
    components: {
      GuideBar,
      videoPlayer
    },
    data() {
      return {
        trafficImg: [
          {img: s1},
          {img: s2},
          {img: s3},
        ],
        playerOptions: {
          techOrder: ['html5', 'flash'], // 兼容顺序,使用flash播放，可以播放flv格式的文件
          playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
          autoplay: true, // 如果true,浏览器准备好时开始回放
          notSupportedMessage: '此视频暂无法播放!', // 无法播放时显示的信息
          sourceOrder: true,
          loop: false, // 导致视频一结束就重新开始。
          // preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          muted: false, // 默认情况下将会消除任何音频。
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          hls: true,  //启用hls？
          flash: {
            hls: { withCredentials: false },
            swf: require('videojs-swf/dist/video-js.swf')         // 引入静态文件swf
          },
          html5: { hls: { withCredentials: false } },
          sources: [
            {
              type: 'video/mp4', // 资源格式写法：'video/mp4'
              src: require('../../../../../assets/img/flash/1.mp4') // 本地资源地址，注意：本地资源存放在public文件夹中，本文视频资源路径public/video/1.mp4
            },
           ],
          poster: 'path', // 你的封面地址
          width: document.documentElement.clientWidth,
          //height: this.fileAreaHeight, // 设置高度，fluid需要设置成flase
          // 配置控制栏
          controlBar: {
            volumePanel: {
              inline: false,//音量调节是否水平
            },
            timeDivider: true, // 时间分割线
                currentTimeDisplay:true,//当前播放位置
                durationDisplay: true, // 总时间
                progressControl: true, // 进度条
                remainingTimeDisplay: false, // 剩余时间
                fullscreenToggle: true // 全屏按钮
          }
        }
      };
    },
    mounted() {
      console.log('当前videojs对象', this.player);
      // this.player.play() // 播放
      // this.player.pause() // 暂停
      // this.player.src(src) // 重置进度条
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player;
      }
    },
  }
</script>

<style scoped>
  #yanhuGuide {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  #flashDiv {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 350%;
    margin-bottom: 200px;
    border: #ff8198 solid 1px;
  }
  object,embed {
    position: absolute;
    width: 100%;
    height: 100%;
    border: #00ff00 solid 1px;
  }
</style>