<template>
   <div class="zhaopin">
     <main>
         <scroll-view scroll-y style="position: fixed;top: 0;bottom: 0" >
             <header>
                 <img src="http://www.dijiadijia.com/imgs/zp.png">
             </header>
             <ul>
                 <li v-for="(item,index)  in zlist " :key="index" @click="gotodetail(item.id)">
                     <main>
                         <h1>{{item.title}}</h1>
                         <h2>{{item.salary}}</h2>
                     </main>
                         <footer>{{item.company}}</footer>
                     <section><h3><img :src="hot" v-if="index<3">{{item.city}}</h3><h4>{{item.year}}年</h4><h5>{{item.degree}}</h5></section>
                 </li>
             </ul>
         </scroll-view>

     </main>
   </div>
</template>
<script type="text/ecmascript-6">
    import {get} from '../../utils/index';
   export default {
       data(){
           return{
               hot:require('./hot.png'),
               zlist:[
               ]
           }
       },
       methods:{
           gotodetail(id){
               wx.navigateTo({
                   url:'/pages/zpd/main?id='+id
               })
           }
       },
       mounted(){
           wx.showShareMenu();
           wx.showLoading({
               title: '加载中...',
           });
           wx.setNavigationBarTitle({
               title: '招聘'
           });
            get('elist').then((res)=>{
                wx.hideLoading();
                if(res.status==200){
                    this.zlist=res.data;
                }else{
                    this.zlist=[];
                }
            });
       }
   }

</script>
<style scoped>
    .zhaopin main header{
        height: 150px;
        width: 100%;
        margin-bottom: 15px;

    }
    .zhaopin main header img{
        width: 96%;
        height: 100%;
        margin: 5px 2%;
        border-radius: 10px;
        box-shadow: 2px 5px 5px #e8e8e8;;
    }
    .zhaopin main ul li{
        width: 100%;
        font-family: "PingFangSC-Regular";
        color:#303133;
        padding-top: 8px;
        padding-bottom: 10px;
        border-bottom: 6px solid #f8f8f8;
    }
    .zhaopin main ul li main{
        display: flex;
        line-height:30px;
        font-size: 18px;

    }
    .zhaopin main ul li main h1{
        flex: 1;
        margin-left: 18px;
    }
    .zhaopin main ul li main h2{
        flex: 1;
        text-align: right;
        color:#F56C6C;
        padding-right: 18px;
        font-size: 15px;

    }
    .zhaopin main ul li footer{
        padding-left: 18px;
        font-size: 14px;
        line-height: 20px;
        color:#909399;
    }
    .zhaopin main ul li section {
        display: flex;
        font-size: 14px;
        line-height: 25px;
        color:#909399;

    }
    ul li section h3{
        width: 90rpx;
        margin-left: 18px;
        margin-right: 2px;
    }
    ul li section h3 img{
        width:30rpx;
        height: 30rpx;
    }
    ul li section h4{
        width: 80rpx;
        margin-left: 2px;
        margin-right: 2px;

    }
    ul li section h5{
        margin-left: 2px;
        width: 60rpx;
    }



</style>