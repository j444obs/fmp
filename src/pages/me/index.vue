<template>
  <div class="me">
    <view class="header">
       <view class="icon">
         <image :src="icon" ></image>
       </view>
       <view class="name">
           <view v-if="name!='未登录'">{{name}}</view>
           <button open-type="getUserInfo" size="mini" style="vertical-align: middle;outline: none;background: #F56C6C;color: white" @getuserinfo="bindgetuserinfo" v-if="name=='未登录'">点此登录</button>
       </view>
    </view>
    <view class="pub" @click="pub">
        <i>+</i>我要发布
    </view>
      <view class="blank"></view>
      <view class="pub">
          <i></i>我的发布
      </view>
  </div>
</template>

<script>

export default {
  data () {
    return {
        name:'未登录',
        icon:require('./icon.png')
    }
  },
    methods:{
        bindgetuserinfo(res){
            console.log(res);
            if(!res.mp.detail.userInfo){
                console.log('授权失败');
            }else{
                this.name=res.mp.detail.userInfo.nickName;
                this.icon=res.mp.detail.userInfo.avatarUrl;
            }

        },
        pub(){
            wx.showModal({
                title: '抱歉',
                content: '发布功能暂未开通,请您将要发布的信息发送至vzhengming@163.com',
                success: function(res) {

                }
            })
        }
    },
    onPullDownRefresh(){
        console.log('下拉')
    },

  components: {
  },



}
</script>

<style scoped>
   .me .header{
     background: #F56C6C;
     height: 120rpx;
     width: 100%;
     display: flex;
   }
   .me .header .icon{
     width: 160rpx;
   }
   .header .icon image{
       width: 100rpx;
       height:  100rpx;
       margin: 0 10px;
       border-radius: 50rpx;
   }
   .me .header .name{
     flex: 1;
     line-height: 100rpx;
     color:white;
     text-indent: 2px;
   }
    .me .blank{
        width: 100%;
        height: 10px;
        background: #e5e5e5;
    }
    .me .pub{
        height: 45px;
        background: white;
        text-align: center;
        line-height: 45px;
        color: #9c9c9c;
        font-size: 15px;
    }
   .me .pub i {
       color:#F56C6C;
       margin-right: 2px;
   }

    .pub:last-child{
        border-bottom: 1px solid #e5e5e5;
    }
    .pub i{
        display: inline-block;
    }

</style>
