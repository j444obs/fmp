<template>
   <div class="zpd">
      <header>
         <div class="job">
            <h1>日语翻译(测试)</h1>
            <h2>10k-15k</h2>
         </div>
         <div class="req">
            <h3>上海</h3>
            <h3>1-3年</h3>
            <h3>大专</h3>
         </div>
         <div class="tag">
             <span>日语一级</span>
             <span>口语流利</span>
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
                1.建立企业和客户间的相互了解、信任和支持的关系，树立良好的企业形象；<br/>
                2.负责公司海内外项目日文资料的翻译和资料整理；<br/>
                3.做好配合业务部门开展商务谈判及对外联络的日文翻译工作；<br/>
                3.加强信息传播工作，主动收集顾客的意见和反应，及时向管理部门通报各种信息，协助管理部门制定经营决策；<br/>
                4.领导交办的其他工作；
             </p>
          </section>
         <section>
            <h1><span></span>任职要求</h1>
            <p>
               1、大专或以上学历，中日文互译熟练，有英语基础，电脑办公软件熟练；<br/>
               2、有两年以上制造业技术方面翻译经验，有光学、模具行业工厂翻译工作经验优先；<br/>
               3、性格随和，与外籍人员沟通有礼貌，尊重客人风俗习惯和工作保密、纪律性强。
            </p>
         </section>

         <section>
            <h1><span></span>工作地址</h1>
            <p>
               韶山南路498号外国语学院
            </p>
            <map id="map"
                 show-location
                 longitude="112.9972700000"
                 latitude="28.133210000" scale="14"
                 style="width: 100%; height: 200px;"
                 :marker="marker"
                 :covers="covers"
            ></map>
         </section>

      </main>

   </div>
</template>
<script type="text/ecmascript-6">
  export default {
      data(){
        return{
            marker:{
                id:1,
                longitude:112.9972700000,
                latitude:28.133210000,

            },
            covers: [{
                latitude: 28.133210000,
                longitude: 112.9972700000,
                iconPath: require('./pos.png')
            }
            ],
            share:require('./share.png')
        }
      },
      methods:{
          commit(){
              wx.showModal({
                  title: '联系方式',
                  content: '电话:021-88xxxxxx\r\n邮箱:xxxxxx@163.com\n联系人:小明',
                  success: function(res) {
                      if (res.confirm) {

                      } else if (res.cancel) {
                          console.log('用户点击取消')
                      }
                  }
              })
          }

      },
      mounted(){
          wx.setNavigationBarTitle({
              title: '职位详情'
          });
          wx.setNavigationBarColor({
              frontColor: '#000000',
              backgroundColor: 'white',
          })
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