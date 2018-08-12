<template>
  <div class="indexcontainer">
    <topSwiper :tops="tops"></topSwiper>
    <div class="blank"></div>
    <div class="main">
        <ul>
            <li v-for="(item,index) in list1" :key="index" @click="jump(item.type)">
                <img :src="item.img">
                <h1>{{item.title}}</h1>
                <h2>{{item.text}}</h2>
            </li>
        </ul>
        <ul>
            <li v-for="(item,index) in list2" :key="index" @click="jump(item.type)">
                <img :src="item.img">
                <h1>{{item.title}}</h1>
                <h2>{{item.text}}</h2>
            </li>
        </ul>
    </div>
      <div class="blank"></div>
      <img class="bot" src="http://www.dijiadijia.com/imgs/shoutu.png">
  </div>
</template>

<script>
import topSwiper from '@/components/topSwiper'
export default {
  data () {
    return {
        tops:[
            {image:'https://pic.tujia.com/upload/mobileconfig/day_171219/201712191802514294.jpg'},
            {image:'http://staticnew.mayi.com/duanzu/resourcesWap/index/images/tygs.jpg'},
            {image:'https://i1.mayi.com/mayi13/M95/JY/HJ/QKYB3T6N73CCNUZUT3F6ZA92DKDFV9.jpg'},
        ],
        list1:[
            {
                type:1,
                title:'招聘',
                text:'行业人才需求',
                img:require('./zhaopin.png')
            },
            {
                type:2,
                title:'供需',
                text:'采销情报共享',
                img:require('./gongxu.png')
            },
            {
                type:3,
                title:'二手',
                text:'转给校友放心',
                img:require('./ershou.png')
            }
        ],
        list2:[
            {
                type:4,
                title:'相识',
                text:'懂你没说的',
                img:require('./jiaoyou.png')

            },
            {
                type:5,
                title:'问答',
                text:'分享寒来暑往',
                img:require('./wenda.png')
            },
            {
                type:6,
                title:'其他',
                text:'更多精彩资讯',
                img:require('./qita.png')
            }
        ],
    }
  },
  methods:{
      jump(type){
          let path='';
          if(type==1){
              path='/pages/zhaopin/main'
          }else{
              wx.showToast({
                  title: '暂只开放招聘功能',
                  icon: 'none',
                  duration: 1500
              });
              return false;
          }
         wx.navigateTo({
             url:path
         })
      }
  },
  components: {
      topSwiper
  },



}
</script>

<style scoped>
  .indexcontainer .blank{
    width: 100%;
    height: 10px;
    background: #e5e5e5;
  }
  .indexcontainer div.main{
  }
  .indexcontainer div.main ul {
      height: 110px;
      width:100%;
      display: flex;
  }
  .indexcontainer div.main ul:first-child {
      margin-top: 8px;
  }
  .indexcontainer div.main ul li{
      height: 110px;
      width:250rpx;
      text-align: center;
      font-family: "PingFang SC";
      color:#606266;
  }
  .indexcontainer div.main ul li img{
      width: 75rpx;
      height: 75rpx;
      margin: 10px 0 0;
  }
  .indexcontainer div.main ul li h1{
      line-height: 25px;
      font-size: 16px;
  }
  .indexcontainer div.main ul li h2{
      line-height: 20px;
      font-size: 14px;
  }
  .indexcontainer img.bot{
      height: 200px;
      width: 100%;
  }

</style>
