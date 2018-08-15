<template>
   <div class="active">
     <main>
         <scroll-view scroll-y style="position: fixed;top: 0;bottom: 0" >
              <section  v-for="(item,index) in list" :key="index">
                  <image :src="item.imgurl"  mode="aspectFit"></image>
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
    .active main section image{
        width: 96%;
        margin-left:2%;
        height: 150px;
        display: inline-block;
        border-radius: 15px;
    }
</style>