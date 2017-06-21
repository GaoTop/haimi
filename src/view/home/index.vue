<template>
  <div class="homeIndex">
    <!--<h1>我是一个小太阳,每天充满正能量!</h1>
    <p>减肥减肥减肥···</p>-->
    <headerBar></headerBar>
    <navBar v-direcNav></navBar>
    <router-view></router-view>
  </div>
</template>

<script>
import headerBar from './component/header.vue'
import navBar from './component/navlist.vue'

export default {
  name: 'homeIndex',
  data () {
    return {
      swiperSlide: [],
      menuList: []
    }
  },
  components: {
    headerBar,
    navBar
  },
  mounted () {
    this.getBanner()
  },
  methods: {
    getBanner () {
      this.$http.get('/api/indexData').then(function (response) {
        this.swiperSlide = response.data.data[0].Records
        this.menuList = response.data.data[1].Records
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h1{
  font-size: 16px;
}
.homeIndex{
  width: 100%;
  height: 100%;
  background: #f3f3f3;
  margin-bottom: 45px;
}
</style>
