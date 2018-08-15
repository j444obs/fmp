<template>
   <div class="acd">
      <header>
         <div class="act">
            <h1>{{activity.title}}</h1>
            <h2>{{activity.fee}}</h2>
         </div>
         <div class="req">
            <h3>{{activity.address}}</h3>
         </div>
         <div class="tag">
             <span v-for="(item,index) in tag" :key="index">{{item}}</span>
         </div>
      </header>
      <footer>
         <button open-type="share">
            <img :src="share">点击分享
         </button>
      </footer>
      <main>
          <section>
             <h1><span></span>活动详情</h1>
             <p>
                <span v-for="(item,index) in detail" :key="index">{{item}}<br/></span>

             </p>
          </section>
         <section>
            <h1><span></span>联系方式</h1>
            <p>
               <span v-for="(item,index) in contact" :key="index">{{item}}<br/></span>
            </p>
         </section>
         <section>
            <h1><span></span>活动时间</h1>
            <p>
               <span>{{activity.time}}</span>
            </p>
         </section>

         <section>
            <h1><span></span>活动地址</h1>
            <p>
               {{activity.address}}
            </p>
            <map id="map"
                 show-location
                 :longitude="activity.longitude"
                 :latitude="activity.latitude" scale="14"
                 style="width: 100%; height: 200px;"
                 :marker="marker"
                 :covers="covers"
            ></map>
         </section>

      </main>

   </div>
</template>
<script type="text/ecmascript-6">
   import {get} from '../../utils/index';
  export default {
      data(){
        return{
            pos:require('./pos.png'),
            share:require('./share.png'),
            activity:{
               title:'',
               fee:'',
               city:'',
               year:'',
               degree:'',
               time:'',
               tag:'',
               detail:'',
               adress:'',
               longitude:'',
               latitude:'',
               contact:''
            },
           covers:[{
                      latitude: '28.133210',
                      longitude:'112.997270',
                      iconPath: 'http://www.dijiadijia.com/imgs/pos.png'
                   }
                   ]
        }
      },
     computed:{
        tag(){
           if(this.activity.tag){
              return this.activity.tag.split(',')
           }else{
              return [];
           }
        },
        detail(){
           if(this.activity.detail){
              return this.activity.detail.split(';')
           }else{
              return [];
           }
        },
         contact(){
           if(this.activity.contact){
              return this.activity.contact.split(';')
           }else{
              return [];
           }
        },
        marker(){
          return  {
              id:1,
              longitude:this.activity.longitude,
              latitude:this.activity.longitude,
           }
        },
        covers(){
         return [{
           latitude: '28.133210',
           longitude:'112.997270',
           iconPath: 'http://www.dijiadijia.com/imgs/pos.png'
        }]
     }
      },
      methods:{
          commit(){
              wx.showModal({
                  title: '联系方式',
                  content: this.job.contact,
                  success: function(res) {
                      if (res.confirm) {

                      } else if (res.cancel) {
                          console.log('用户点击取消')
                      }
                  }
              })
          },
         covers(){
            return [{
               latitude: this.job.latitude,
               longitude:this.job.longitude,
               iconPath: require('./pos.png')
            }
            ]
         }

      },

     onLoad:function(options){
        wx.hideLoading();
        let id=options.id;
        get('actdetails&id='+id).then((res)=>{
           wx.hideLoading();
           if(res.status==200){
            this.activity=res.data
           }else{
              wx.hideLoading();
           }
        });
        wx.setNavigationBarTitle({
           title: '活动详情'
        });
        wx.setNavigationBarColor({
           frontColor: '#000000',
           backgroundColor: 'white',
        });

     }
  }

</script>
<style scoped>
   .acd{
      font-family:"PingFang SC";
   }
   .acd header{
      width: 100%;
      border-bottom: 5px solid #f2f2f2;
   }
   header .act{
      display: flex;
      line-height: 30px;
   }
   .act h1{
      flex: 3;
      padding-left: 18px;
      font-size: 22px;
      color:#303133;
   }
   .act h2{
      flex: 2;
      color:#F56C6C;
      text-align: right;
      font-size: 16px;
      padding-right: 18px;
   }
   .req{
      line-height: 20px;
      color:#909399;
      font-size: 12px;
      padding-left: 18px;
      display: flex;
   }
   .req h3{
      margin-right: 10px;
   }
   .tag{
      display: flex;
      padding-left: 18px;
      margin: 0 0 10px;
   }
   .tag span{
      display: inline-block;
      padding: 1px 3px;
      border: 1px solid #C0C4CC;
      color:#909399;
      font-size: 12px;
      border-radius: 5px;
      margin-right: 3px;
   }
   main{
      border-bottom: 5px solid #f2f2f2;
   }
   main section{
      padding: 18px;
      color:#303133;
   }
   section h1{
      font-size: 18px;
      vertical-align: middle;
   }
   section h1 span{
      color:#F56C6C;
      display: inline-block;
      width: 3px;
      height: 18px;
      vertical-align:middle;
      margin-right: 5px;
      background: #F56C6C;
      border-radius: 2px;
   }
   section p{
      margin-top: 10px;
      font-size: 15px;
      color:#606266;
   }
   footer{
      height: 55px;
      width: 100%;
      line-height: 55px;
      background: white;
      display: flex;

      border-bottom: 5px solid #f2f2f2;
   }
   footer button{
      flex: 1;
      text-align: center;
      line-height: 55px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      outline: none;
      border: 0px;
      color:#606266;
      background-color:white
   }
   footer button::after{
      border: none;
   }
   footer button img{
      width: 30px;
      height: 30px;
      vertical-align: middle;
      margin-right: 10px;
   }
</style>