<template>
   <div class="zpd">
      <header>
         <div class="job">
            <h1>{{job.title}}</h1>
            <h2>{{job.salary}}</h2>
         </div>
         <div class="req">
            <h3>{{job.city}}</h3>
            <h3>{{job.year}}</h3>
            <h3>{{job.degree}}</h3>
         </div>
         <div class="tag">
             <span v-for="(item,index) in tag" :key="index">{{item}}</span>
         </div>
      </header>
      <footer>
         <button open-type="share">
            <img :src="share">
         </button>
         <h1 @click="commit"><span>立即沟通</span></h1>
      </footer>
      <main>
          <section>
             <h1><span></span>职位详情</h1>
             <p>
                <span v-for="(item,index) in detail" :key="index">{{item}};<br/></span>

             </p>
          </section>
         <section>
            <h1><span></span>任职要求</h1>
            <p>
               <span v-for="(item,index) in jreqire" :key="index">{{item}};<br/></span>
            </p>
         </section>

         <section>
            <h1><span></span>工作地址</h1>
            <p>
               {{job.adress}}
            </p>
            <map id="map"
                 show-location
                 :longitude="job.longitude"
                 :latitude="job.latitude" scale="14"
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
            share:require('./share.png'),
            pos:require('./pos.png'),
            job:{
               title:'',
               salary:'',
               city:'',
               year:'',
               degree:'',
               tag:'',
               detail:'',
               jreqire:'',
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
           if(this.job.tag){
              return this.job.tag.split(',')
           }else{
              return [];
           }
        },
        detail(){
           if(this.job.detail){
              return this.job.detail.split(';')
           }else{
              return [];
           }
        },
        jreqire(){
           if(this.job.jreqire){
              return this.job.jreqire.split(';')
           }else{
              return [];
           }
        },
        marker(){
          return  {
              id:1,
              longitude:this.job.longitude,
              latitude:this.job.longitude,
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
               iconPath: require('./share.png')
            }
            ]
         }

      },

     onLoad:function(options){
        wx.hideLoading();
        get('jobdetail&id='+options.id).then((res)=>{
           wx.hideLoading();
           if(res.status==200){
            this.job=res.data
           }else{
              wx.hideLoading();
           }
        });
        wx.setNavigationBarTitle({
           title: '职位详情'
        });
        wx.setNavigationBarColor({
           frontColor: '#000000',
           backgroundColor: 'white',
        });

     }
  }

</script>
<style scoped>
   .zpd{
      font-family:"PingFang SC";
   }
   .zpd header{
      width: 100%;
      border-bottom: 5px solid #f2f2f2;
   }
   header .job{
      display: flex;
      line-height: 30px;
   }
   .job h1{
      flex: 3;
      padding-left: 18px;
      font-size: 22px;
      color:#303133;
   }
   .job h2{
      flex: 3;
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
      background-color:white
   }
   footer button::after{
      border: none;
   }
   footer button img{
      width: 30px;
      height: 30px;
      vertical-align: middle;
   }
   footer h1{
      flex: 4;
      background: #f5b0ae;
      color:white;
      text-align: center;
      font-size: 16px;
   }
   footer h1 span{
      background: #f56060;
      color:white;
      text-align: center;
      font-size: 14px;
      border-radius: 20px;
      display: inline-block;
      line-height: 14px;
      padding: 7px 10px;
   }
</style>