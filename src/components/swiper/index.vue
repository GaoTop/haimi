<template>
  <div class="swiper-container my-swiper">
    <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in swiperSlide">
            <div class="hh">
                 <!--<img :src="item.PictureWebp"/>-->
                 <img v-if='item.PictureWebp' :src='item.PictureWebp'>
                 <img v-else :src='item.picture'>
            </div>
        </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import '@/lib/swiper/css/swiper.css'
import '@/lib/swiper/js/swiper.js'
export default {
  name: 'Swiper',
  props: ['swiperSlide'],
  data () {
    return {
       swiperObj: ""
    }
  },
  mounted () {
    this.swiperObj = new Swiper(this.$el, {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      zoom : this.zoom,
      autoplay: this.autoplay
    });
  },
  updated () {
    this.swiperObj.update()
  }
}
</script>

<style lang="less">
  .my-swiper{
    .swiper-slide img{
      display:block;
      width:100%;
    }
    .swiper-pagination{
      .swiper-pagination-bullet{
        width:10px;
        height:3px;
        -webkit-transition:width .5s ease;
      }
      .swiper-pagination-bullet-active{
        width:20px;
      }
    }
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
