<template>
   <div class="active">
     <main>
         <scroll-view scroll-y style="position: fixed;top: 0;bottom: 0" >
              <section  v-for="(item,index) in list" :key="index" @click="gotodetail(item.id)">
                  <h1><span></span>{{item.title}}</h1>
                  <img :src="item.imgurl">
              </section>
         </scroll-view>
     </main>
   </div>
</template>
<script type="text/ecmascript-6">
    import {get} from '../../utils/index';
   export default {
       data(){
           return{
               list:[]
           }
       },
       methods:{
           gotodetail(id){
               wx.navigateTo({
                   url:'/pages/acd/main?id='+id
               })
           }
       },
       mounted(){
           wx.showShareMenu();
           wx.showLoading({
               title: '加载中...',
           });
           wx.setNavigationBarTitle({
               title: '近期活动'
           });
           get('activity').then((res)=>{
               wx.hideLoading();
               if(res.status==200){
                   console.log(res);
                    this.list=res.data;
               }
           });
       }
   }

</script>
<style scoped>
    .active section{
        margin-top: 5px;
    }
    .active section h1{
        font-size: 14px;
        color: #606266;
        padding-left: 3%;
        line-height: 22px;
        height: 22px;
    }
    section h1 span{
        display: inline-block;
        width: 3px;
        height: 15px;
        vertical-align:middle;
        margin-right: 5px;
        background: #F56C6C;
        border-radius: 2px;
    }
    .active main section img{
        width: 96%;
        margin-left:2%;
        height: 150px;
        display: inline-block;
        border-radius: 15px;
        box-shadow: 0px 5px 2px #ededed;
    }
</style>