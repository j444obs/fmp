<template>
  <div class="topswiper">
      <swiper
              indicator-dots='true'
              indicator-color='white'
              indicator-active-color="#F56C6C"
              autoplay='true'
              interval='6000'
              circular='true'
              duration='800'
      >
          <div v-for="i(item,index) in tops" :key="index">
              <swiper-item>
                  <img :src="item.imgurl"  class="slide-image">
              </swiper-item>
          </div>
      </swiper>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
      props:['tops']
  }
</script>
<style scoped>
    .topswiper ._swiper-item img{
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
    }

</style>